import YellowBlock from "@/components/UI/yellowBlock/YellowBlock";

export default function Loading() {
  return (
    <main>
      <YellowBlock option="heading" isLoading={true}>
        <h1>&nbsp;Loading...&nbsp;</h1>
      </YellowBlock>
    </main>
  )
}
