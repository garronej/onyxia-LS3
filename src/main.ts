import type { OnyxiaCtx } from "./onyxia";
import { createHomeLS3 } from "./HomeLS3";
import { registerPageContainerListener } from "./registerPageContainerListener";

(
    window as typeof window & {
        onOnyxiaCtxReady?: (onyxiaCtx: OnyxiaCtx) => void;
    }
).onOnyxiaCtxReady = async ctx => {
    const { HomeLS3 } = await createHomeLS3(ctx);
    const { mount } = ctx.declareComponent(HomeLS3);

    registerPageContainerListener("home", containerElement => {
        mount(containerElement);
    });
};
