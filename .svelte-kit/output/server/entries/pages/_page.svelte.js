import { e as escape_html } from "../../chunks/client.js";
import "clsx";
import { j as pop, p as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let milliseconds = 0;
  let hours = Math.floor(milliseconds / (3.6 * 1e6)).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  let minutes = Math.floor(milliseconds % (3.6 * 1e6) / 6e4).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  let seconds = Math.floor(milliseconds % (3.6 * 1e6) % 6e4 / 1e3).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  let centiseconds = Math.floor(milliseconds % (3.6 * 1e6) % 6e4 % 1e3 / 10).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const now = Date.now();
  $$payload.out += `<main class="svelte-17nd0ey"><div class="header"><div>${escape_html(now)}</div></div> <div class="clockDisplay svelte-17nd0ey"><div class="numbers svelte-17nd0ey">${escape_html(hours)}:${escape_html(minutes)}:${escape_html(seconds)}.${escape_html(centiseconds)}</div></div> <div class="controls"><button>play</button> <button>pause</button> <button>stop</button></div> <div>"Hello there"</div></main>`;
  pop();
}
export {
  _page as default
};
