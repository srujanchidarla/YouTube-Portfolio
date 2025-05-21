// app/category/analytics/components/LocalGuideStats.tsx

import React from "react";
import {
  MapIcon,
  PhotoIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const LocalGuideStats = () => {
  // Google Local Guide stats from screenshots
  const localGuideStats = {
    level: 8,
    totalPoints: 31038,
    neededPoints: 50000,
    contributions: {
      total: 5444,
      reviews: 276,
      ratings: 51,
      photos: 3941,
      videos: 157,
      captions: 1,
      answers: 781,
      edits: 75,
      reportedIncorrect: 0,
      placesAdded: 154,
      roadsAdded: 0,
      factsChecked: 0,
      qAndA: 8,
    },
    photoStats: {
      totalPhotos: 4109,
      totalReactions: 760,
      totalViews: 16615155,
    },
    socialStats: {
      followers: 242,
      following: 4,
    },
    badges: ["Explorer", "Sanchari"],
    interests: ["Hyderabad", "Biryani", "Family Restaurants"],
  };

  // Calculate progress percentage
  const progressPercentage =
    (localGuideStats.totalPoints / localGuideStats.neededPoints) * 100;

  return (
    <div className="mt-12   ">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
        <MapIcon className="h-6 w-6 mr-2 text-gray-700 dark:text-gray-300" />
        Google Local Guide Stats
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Level and Points */}
        <div className="rounded-lg border border-gray-200 dark:border-zinc-700 overflow-hidden shadow-sm">
          <div className="bg-gray-50 dark:bg-zinc-800 px-6 py-4 border-b border-gray-200 dark:border-zinc-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Local Guide Profile
            </h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <div className="flex items-center">
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium mr-2 px-3 py-1 rounded dark:bg-orange-900 dark:text-orange-300">
                    Level {localGuideStats.level}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {localGuideStats.totalPoints} points
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {localGuideStats.neededPoints} for next level
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-4 flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {localGuideStats.contributions.total}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total Contributions
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-4 flex flex-col items-center justify-center">
                <div className="flex">
                  <p className="text-xl font-bold text-gray-900 dark:text-white mr-2">
                    {localGuideStats.socialStats.followers}
                  </p>
                  <span className="text-gray-500 dark:text-gray-400 text-xs self-end mb-1">
                    followers
                  </span>
                </div>
                <div className="flex mt-1">
                  <p className="text-xl font-bold text-gray-900 dark:text-white mr-2">
                    {localGuideStats.socialStats.following}
                  </p>
                  <span className="text-gray-500 dark:text-gray-400 text-xs self-end mb-1">
                    following
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Badges:
              </p>
              <div className="flex gap-2 flex-wrap">
                {localGuideStats.badges.map((badge) => (
                  <span
                    key={badge}
                    className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Interests:
              </p>
              <div className="flex gap-2 flex-wrap">
                {localGuideStats.interests.map((interest) => (
                  <span
                    key={interest}
                    className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photo Stats */}
        <div className="rounded-lg border border-gray-200 dark:border-zinc-700 overflow-hidden shadow-sm">
          <div className="bg-gray-50 dark:bg-zinc-800 px-6 py-4 border-b border-gray-200 dark:border-zinc-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Photo Impact
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-4 flex flex-col items-center justify-center">
                <PhotoIcon className="h-6 w-6 mb-1 text-blue-500" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {localGuideStats.photoStats.totalPhotos.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Photos
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-4 flex flex-col items-center justify-center">
                <StarIcon className="h-6 w-6 mb-1 text-yellow-500" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {localGuideStats.photoStats.totalReactions.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Reactions
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-4 flex flex-col items-center justify-center">
                <svg
                  className="h-6 w-6 mb-1 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {(localGuideStats.photoStats.totalViews / 1000000).toFixed(1)}
                  M
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Views
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">
                Top Contribution Categories
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Photos
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {localGuideStats.contributions.photos}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Answers
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {localGuideStats.contributions.answers}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Reviews
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {localGuideStats.contributions.reviews}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Contribution Stats */}
      <div className="mt-6">
        <div className="rounded-lg border border-gray-200 dark:border-zinc-700 overflow-hidden shadow-sm">
          <div className="bg-gray-50 dark:bg-zinc-800 px-6 py-4 border-b border-gray-200 dark:border-zinc-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Contribution Breakdown
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  label: "Reviews",
                  value: localGuideStats.contributions.reviews,
                  icon: ChatBubbleLeftRightIcon,
                  color: "text-purple-500",
                },
                {
                  label: "Ratings",
                  value: localGuideStats.contributions.ratings,
                  icon: StarIcon,
                  color: "text-yellow-500",
                },
                {
                  label: "Photos",
                  value: localGuideStats.contributions.photos,
                  icon: PhotoIcon,
                  color: "text-blue-500",
                },
                {
                  label: "Videos",
                  value: localGuideStats.contributions.videos,
                  icon: () => (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  color: "text-red-500",
                },
                {
                  label: "Places Added",
                  value: localGuideStats.contributions.placesAdded,
                  icon: MapIcon,
                  color: "text-green-500",
                },
                {
                  label: "Answers",
                  value: localGuideStats.contributions.answers,
                  icon: () => (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  ),
                  color: "text-orange-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-4"
                >
                  <div className="flex flex-col items-center">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                      {item.value.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalGuideStats;
