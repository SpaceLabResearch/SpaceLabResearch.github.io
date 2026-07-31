import ArticlePage from "../../components/ArticlePage";

export default function Page() {
  return (
    <ArticlePage
      article={{
        no: "001",
        date: "31.07.26",
        tag: "FIELD NOTE / RESEARCH",
        title: "Redefine Success",
        intro:
          "Confidence doesn’t always arrive with a bold entrance. Sometimes, it builds quietly, step by step, as we show up for ourselves day after day. It grows when we choose to try, even when we’re unsure of the outcome. Every time you take action despite self-doubt, you reinforce the belief that you’re capable. Confidence isn’t about having all the answers — it’s about trusting that you can figure it out along the way. You don’t need to be fearless to reach your goals, you just need to be willing. Willing to try, willing to learn, and willing to believe that you’re capable of more than you know. The road may not always be smooth, but growth rarely is. What matters most is that you keep going, keep learning, and keep believing in the version of yourself you’re becoming.",
        featureImage: "/images/eva-risk-map.svg",
        featureAlt: "EVA multi-factor risk map",
        sections: [],
      }}
    />
  );
}
