import { useStore } from '@builder.io/mitosis';

export default function Checkbox(props) {
  const state = useStore({
    checked: false,
    switchChecked() {
      state.checked != state.checked;
    },
  });

  return (
    <div>
      <input
        aria-checked={state.checked}
        onClick={() => state.switchChecked()}
        type="checkbox"
        name="aposfja"
        checked={state.checked}
        aria-hidden
      />
      <p>checked {state.checked} </p>
    </div>
  );
}
