// components/sections/Reviews.tsx
"use client";

import { useState, useEffect } from "react";
import {
  ArrowUturnRightIcon,
  FunnelIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

interface Review {
  id: string;
  author: string;
  authorEmail?: string;
  authorInitial: string;
  content: string;
  likes: number;
  timestamp: string;
  replies?: Review[];
}

interface ReviewsProps {
  projectId: string; // Changed from videoId to projectId
}

const Reviews = ({ projectId }: ReviewsProps) => {
  const [reviewText, setReviewText] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [sortByNewest, setSortByNewest] = useState<boolean>(true);
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(
    new Set()
  );
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showNameEmailForm, setShowNameEmailForm] = useState<boolean>(false);

  // Load reviews from localStorage
  useEffect(() => {
    const loadReviews = () => {
      const storedReviewsJSON = localStorage.getItem(
        `projectReviews_${projectId}`
      );
      if (storedReviewsJSON) {
        const storedReviews = JSON.parse(storedReviewsJSON);
        setReviews(storedReviews);
      } else {
        // Sample reviews data for first-time viewing
        const sampleReviews: Review[] = [
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
        ];

        setReviews(sampleReviews);
        localStorage.setItem(
          `projectReviews_${projectId}`,
          JSON.stringify(sampleReviews)
        );
      }
    };

    loadReviews();
  }, [projectId]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewText.trim() === "") return;

    // Show form to collect name and email if not already provided
    if (!userName && !showNameEmailForm) {
      setShowNameEmailForm(true);
      return;
    }

    if (!userName) {
      return; // Don't proceed without a name
    }

    // Add new review to the list
    const newReview: Review = {
      id: `new-${Date.now()}`,
      author: userName,
      authorEmail: userEmail || undefined,
      authorInitial: userName.charAt(0).toUpperCase(),
      content: reviewText,
      likes: 0,
      timestamp: "Just now",
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(
      `projectReviews_${projectId}`,
      JSON.stringify(updatedReviews)
    );

    // Reset the form
    setReviewText("");
    setShowNameEmailForm(false);
  };

  // Toggle expanding a review's replies
  const toggleExpandReview = (reviewId: string) => {
    setExpandedReviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  // Handle like on a review
  const handleLikeReview = (reviewId: string) => {
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        // Check if already liked
        const likedReviewsJSON = localStorage.getItem("likedReviews");
        const likedReviews = likedReviewsJSON
          ? JSON.parse(likedReviewsJSON)
          : [];

        const reviewIdentifier = `${projectId}_${reviewId}`;
        const alreadyLiked = likedReviews.includes(reviewIdentifier);

        if (alreadyLiked) {
          // Remove like
          const index = likedReviews.indexOf(reviewIdentifier);
          likedReviews.splice(index, 1);
          localStorage.setItem("likedReviews", JSON.stringify(likedReviews));
          return { ...review, likes: review.likes - 1 };
        } else {
          // Add like
          likedReviews.push(reviewIdentifier);
          localStorage.setItem("likedReviews", JSON.stringify(likedReviews));
          return { ...review, likes: review.likes + 1 };
        }
      }
      // Handle nested replies
      if (review.replies) {
        const updatedReplies = review.replies.map((reply) => {
          if (reply.id === reviewId) {
            const likedReviewsJSON = localStorage.getItem("likedReviews");
            const likedReviews = likedReviewsJSON
              ? JSON.parse(likedReviewsJSON)
              : [];

            const reviewIdentifier = `${projectId}_${reviewId}`;
            const alreadyLiked = likedReviews.includes(reviewIdentifier);

            if (alreadyLiked) {
              const index = likedReviews.indexOf(reviewIdentifier);
              likedReviews.splice(index, 1);
              localStorage.setItem(
                "likedReviews",
                JSON.stringify(likedReviews)
              );
              return { ...reply, likes: reply.likes - 1 };
            } else {
              likedReviews.push(reviewIdentifier);
              localStorage.setItem(
                "likedReviews",
                JSON.stringify(likedReviews)
              );
              return { ...reply, likes: reply.likes + 1 };
            }
          }
          return reply;
        });
        return { ...review, replies: updatedReplies };
      }
      return review;
    });

    setReviews(updatedReviews);
    localStorage.setItem(
      `projectReviews_${projectId}`,
      JSON.stringify(updatedReviews)
    );
  };

  // Check if a review is liked by the current user
  const isReviewLiked = (reviewId: string): boolean => {
    const likedReviewsJSON = localStorage.getItem("likedReviews");
    if (!likedReviewsJSON) return false;

    const likedReviews = JSON.parse(likedReviewsJSON);
    const reviewIdentifier = `${projectId}_${reviewId}`;
    return likedReviews.includes(reviewIdentifier);
  };

  // Sort reviews
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortByNewest) {
      // For simplicity, assuming newer reviews have higher IDs
      return b.id.localeCompare(a.id);
    } else {
      return b.likes - a.likes;
    }
  });

  return (
    <div className="mt-8 pb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium dark:text-white">
          {reviews.length} Comments
        </h3>
        <button
          onClick={() => setSortByNewest(!sortByNewest)}
          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full px-3 py-1"
        >
          <FunnelIcon className="h-4 w-4" />
          Sort by: {sortByNewest ? "Newest first" : "Most appreciated"}
        </button>
      </div>

      {/* Review form */}
      <div className="flex gap-4 mb-8">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center text-white font-medium">
            {userName ? userName.charAt(0).toUpperCase() : "?"}
          </div>
        </div>
        <form onSubmit={handleSubmitReview} className="w-full">
          {showNameEmailForm ? (
            <div className="space-y-3 mb-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email (optional)
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full p-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Your email will not be displayed publicly
                </p>
              </div>
            </div>
          ) : (
            <input
              type="text"
              placeholder="Add a review / Ask a question..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full p-2 pb-3 bg-transparent border-b border-gray-200 dark:border-zinc-700 focus:outline-none focus:border-blue-500 dark:text-white"
            />
          )}

          {(reviewText.trim() !== "" || showNameEmailForm) && (
            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => {
                  setReviewText("");
                  setShowNameEmailForm(false);
                }}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-3 py-1.5 text-sm font-medium rounded-full bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700 ${
                  showNameEmailForm && !userName
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={showNameEmailForm && !userName}
              >
                {showNameEmailForm ? "Submit Review" : "Continue"}
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Reviews list */}
      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <div key={review.id}>
            {/* Main review */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-indigo-500 flex items-center justify-center text-white font-medium">
                  {review.authorInitial}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium dark:text-white">
                    {review.author}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {review.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                  {review.content}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    onClick={() => handleLikeReview(review.id)}
                  >
                    {isReviewLiked(review.id) ? (
                      <HeartIconSolid className="h-4 w-4 text-red-500" />
                    ) : (
                      <HeartIcon className="h-4 w-4" />
                    )}
                    <span className="text-xs">{review.likes}</span>
                  </button>
                  <button className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Reply
                  </button>
                </div>
              </div>
            </div>

            {/* Replies */}
            {review.replies && review.replies.length > 0 && (
              <>
                <div className="ml-14 mt-4 space-y-4">
                  {(expandedReviews.has(review.id)
                    ? review.replies
                    : review.replies.slice(0, 1)
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
                          <button
                            className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                            onClick={() => handleLikeReview(reply.id)}
                          >
                            {isReviewLiked(reply.id) ? (
                              <HeartIconSolid className="h-4 w-4 text-red-500" />
                            ) : (
                              <HeartIcon className="h-4 w-4" />
                            )}
                            <span className="text-xs">{reply.likes}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Toggle replies button */}
                {review.replies.length > 1 && (
                  <button
                    onClick={() => toggleExpandReview(review.id)}
                    className="flex items-center gap-1 ml-14 mt-3 text-sm font-medium text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    <ArrowUturnRightIcon className="h-4 w-4 -scale-x-100" />
                    {expandedReviews.has(review.id)
                      ? "Hide replies"
                      : `View ${review.replies.length - 1} more ${
                          review.replies.length - 1 === 1 ? "reply" : "replies"
                        }`}
                  </button>
                )}
              </>
            )}
          </div>
        ))}

        {reviews.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              No reviews yet. Be the first to review this project!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
