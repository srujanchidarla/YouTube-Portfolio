// components/sections/Comments.tsx
"use client";

import { useState, useEffect, JSX } from "react";
import {
  ArrowUturnRightIcon,
  FunnelIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

interface Comment {
  id: string;
  author: string;
  authorInitial: string;
  content: string;
  likes: number;
  timestamp: string;
  replies?: Comment[];
}

interface CommentsProps {
  videoId: string;
}

const Comments = ({ videoId }: CommentsProps): JSX.Element => {
  const [commentText, setCommentText] = useState<string>("");
  const [sortByNewest, setSortByNewest] = useState<boolean>(true);
  const [expandedComments, setExpandedComments] = useState<Set<string>>(
    new Set()
  );
  const [comments, setComments] = useState<Comment[]>([]);

  // Simulate API call to fetch comments
  useEffect(() => {
    // In a real application, fetch comments from an API
    const fetchComments = () => {
      // Sample comments data - replace with actual API call
      const sampleComments: Comment[] = [
        {
          id: "1",
          author: "Jane Smith",
          authorInitial: "J",
          content:
            "This is an amazing project! I love the UI design and how responsive it is. Would you consider making a tutorial on how you built it?",
          likes: 45,
          timestamp: "2 weeks ago",
          replies: [
            {
              id: "1-1",
              author: "Srujan Chidarla",
              authorInitial: "S",
              content:
                "Thank you Jane! I'm considering making a detailed walkthrough of the development process. Stay tuned!",
              likes: 12,
              timestamp: "1 week ago",
            },
          ],
        },
        {
          id: "2",
          author: "Developer123",
          authorInitial: "D",
          content:
            "The way you implemented the authentication flow is very elegant. What libraries did you use for state management?",
          likes: 28,
          timestamp: "3 weeks ago",
        },
        {
          id: "3",
          author: "Tech Enthusiast",
          authorInitial: "T",
          content:
            "I've been looking for a solution like this for my own portfolio. The code structure looks very clean!",
          likes: 19,
          timestamp: "1 month ago",
        },
      ];

      setComments(sampleComments);
    };

    fetchComments();
  }, [videoId]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim() === "") return;

    // Add new comment to the list
    const newComment: Comment = {
      id: `new-${Date.now()}`,
      author: "You",
      authorInitial: "Y",
      content: commentText,
      likes: 0,
      timestamp: "Just now",
    };

    setComments((prevComments) => [newComment, ...prevComments]);
    setCommentText("");
  };

  // Toggle expanding a comment's replies
  const toggleExpandComment = (commentId: string) => {
    setExpandedComments((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  };

  // Sort comments
  const sortedComments = [...comments].sort((a, b) => {
    if (sortByNewest) {
      // In a real app, you'd use actual dates
      return 0; // Keep original order for demo
    } else {
      return b.likes - a.likes;
    }
  });

  return (
    <div className="mt-8 pb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium dark:text-white">
          {comments.length} Comments
        </h3>
        <button
          onClick={() => setSortByNewest(!sortByNewest)}
          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full px-3 py-1"
        >
          <FunnelIcon className="h-4 w-4" />
          Sort by: {sortByNewest ? "Newest first" : "Top comments"}
        </button>
      </div>

      {/* Comment form */}
      <div className="flex gap-4 mb-8">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center text-white font-medium">
            Y
          </div>
        </div>
        <form onSubmit={handleSubmitComment} className="w-full">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full p-2 pb-3 bg-transparent border-b border-gray-200 dark:border-zinc-700 focus:outline-none focus:border-blue-500 dark:text-white"
          />
          {commentText.trim() !== "" && (
            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => setCommentText("")}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700"
              >
                Comment
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Comments list */}
      <div className="space-y-6">
        {sortedComments.map((comment) => (
          <div key={comment.id}>
            {/* Main comment */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-indigo-500 flex items-center justify-center text-white font-medium">
                  {comment.authorInitial}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium dark:text-white">
                    {comment.author}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {comment.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                  {comment.content}
                </p>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <HandThumbUpIcon className="h-4 w-4" />
                    <span className="text-xs">{comment.likes}</span>
                  </button>
                  <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <HandThumbDownIcon className="h-4 w-4" />
                  </button>
                  <button className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Reply
                  </button>
                </div>
              </div>
            </div>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <>
                <div className="ml-14 mt-4 space-y-4">
                  {(expandedComments.has(comment.id)
                    ? comment.replies
                    : comment.replies.slice(0, 1)
                  ).map((reply) => (
                    <div key={reply.id} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center text-white font-medium text-xs">
                          {reply.authorInitial}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium dark:text-white">
                            {reply.author}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {reply.timestamp}
                          </span>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                          {reply.content}
                        </p>
                        <div className="flex items-center gap-3">
                          <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                            <HandThumbUpIcon className="h-4 w-4" />
                            <span className="text-xs">{reply.likes}</span>
                          </button>
                          <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                            <HandThumbDownIcon className="h-4 w-4" />
                          </button>
                          <button className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Toggle replies button */}
                {comment.replies.length > 1 && (
                  <button
                    onClick={() => toggleExpandComment(comment.id)}
                    className="flex items-center gap-1 ml-14 mt-3 text-sm font-medium text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    <ArrowUturnRightIcon className="h-4 w-4 -scale-x-100" />
                    {expandedComments.has(comment.id)
                      ? "Hide replies"
                      : `View ${comment.replies.length - 1} more ${
                          comment.replies.length - 1 === 1 ? "reply" : "replies"
                        }`}
                  </button>
                )}
              </>
            )}
          </div>
        ))}

        {comments.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              No comments yet. Be the first to comment!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
