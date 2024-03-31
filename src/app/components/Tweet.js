export const Tweet = ({ tweet }) => {
    const animationOrEmpty =
        getAnimationFromTweetOrEmpty(tweet);
    return (
        <div>
            <button
                className={`mt-5 border border-black ml-2 py-2 px-3 ${animationOrEmpty}`}>
                {tweet}
            </button>
        </div>
    );
};

const getHashtagInTweet = (tweet) => {
    const hashtagRegex = /#(\w+)/g;
    const hashtags = tweet.match(hashtagRegex);
    return hashtags ? hashtags[0] : null;
};

const getAnimationFromTweetOrEmpty = (tweet) => {
    const hashtag = getHashtagInTweet(tweet);
    return LikeAnimations[hashtag]?.animationClasses || '';
};

const LikeAnimations = {
    '#MerryChristmas': {
        animationClasses:
            'gradient-radial from-green-500 text-red-500 border-red-500',
    },
    '#HappyNewYear': {
        animationClasses:
            'gradient-conic animate-pulse text-blue-500 border-blue-500',
    },
    '#HappyNewChineseYear': {
        animationClasses:
            'gradient-radial text-green-500 border-green-500',
    },
};
