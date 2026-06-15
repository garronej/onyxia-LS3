import { createHomeLS3 } from "./HomeLS3/index.mjs";
import { registerPageContainerListener } from "./registerPageContainerListener.mjs";

window.onOnyxiaCtxReady = async ctx => {
    //const { HomeLS3 } = await createHomeLS3(ctx);
    const { HomeLS3 } = await ctx.import("ui/shared/HomeLS3");

    {
        const { mount } = ctx.declareComponent(HomeLS3);

        registerPageContainerListener("home", containerElement => {
            mount(containerElement);
        });
    }
};
