import { useSignal } from "@preact/signals";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";

export default define.page(function Home(ctx) {
  const count = useSignal(3);

  ctx.state.title = count.value + " Fresh Counter" +
    (Math.abs(count.value) === 1 ? "" : "s");

  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <p>[хехе</p>
        <b>бедрическое дупло</b>
      </div>
    </div>
  );
});
