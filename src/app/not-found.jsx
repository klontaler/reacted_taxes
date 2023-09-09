import YellowBlock from '@/components/UI/yellowBlock/YellowBlock';

export default function NotFound() {
  return (
    <main>
      <YellowBlock option="heading">
        <h1>Not found</h1>
      </YellowBlock>
      <h2 style={{margin: '32px auto'}}>Sorry, this page doesn’t seem to exist.</h2>

    </main>
  )
}
