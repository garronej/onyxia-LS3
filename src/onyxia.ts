import type { ReactNode } from "react";

export type Link = {
    href: string;
    onClick: (event?: any) => void;
};

type OnyxiaImportModules = {
    react: typeof import("react");
    tss: {
        tss: any;
    };
    "ui/routes": {
        routes: {
            launcher: (params: {
                catalogId: string;
                chartName: string;
                helmValuesPatch?:
                    | {
                          path: string[];
                          value: unknown;
                      }[]
                    | undefined;
                autoLaunch?: boolean;
            }) => { push: () => void };
            document: (params: { source: string }) => { link: Link };
        };
    };
    core: {
        useCoreState: (...args: string[]) => any;
        getCoreSync: () => {
            functions: {
                userConfigs: {
                    changeValue: (params: { key: string; value: unknown }) => void;
                };
            };
        };
    };
    env: {
        PUBLIC_URL: string;
    };
    evt: typeof import("evt");
    "evt/hooks": typeof import("evt/hooks");
    "evt/tools/Deferred": typeof import("evt/tools/Deferred");
    "powerhooks/useConst": typeof import("powerhooks/useConst");
    "powerhooks/useGlobalState": typeof import("powerhooks/useGlobalState");
    "lazy-icons": {
        getIconUrlByName: (name: string) => string;
    };
    "onyxia-ui/Dialog": typeof import("onyxia-ui/Dialog");
    "onyxia-ui/Button": typeof import("onyxia-ui/Button");
    "onyxia-ui/Text": typeof import("onyxia-ui/Text");
    "onyxia-ui/TextField": typeof import("onyxia-ui/TextField");
    "@mui/material/Divider": typeof import("@mui/material/Divider");
    "@mui/material/Link": typeof import("@mui/material/Link");
};

type OnyxiaModuleName = keyof OnyxiaImportModules;

export type OnyxiaCtx = {
    import: <ModuleName extends OnyxiaModuleName>(
        moduleName: ModuleName
    ) => Promise<OnyxiaImportModules[ModuleName]>;
    declareComponent: (Component: () => ReactNode) => {
        mount: (containerElement: HTMLElement | null) => void;
    };
};
