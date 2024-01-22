import IconReaction from "./IconReaction"
export default function Icon() {
    return (
        <div className="flex gap-x-20 pt-7 ">
            <IconReaction src="src/assets/Reply.svg" />
            <IconReaction src="src/assets/Retweet.svg" />
            <IconReaction src="src/assets/React.svg" />
            <IconReaction src="src/assets/Share.svg" />
        </div>
    )
}