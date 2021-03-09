import { reactive, toRefs } from "vue";

const state = reactive({
    hookCounter: 0
});

const addHookCount = () => state.hookCounter++;

export default function useCounter() {
    return {
        addHookCount,
        ...toRefs(state)
    };
}
