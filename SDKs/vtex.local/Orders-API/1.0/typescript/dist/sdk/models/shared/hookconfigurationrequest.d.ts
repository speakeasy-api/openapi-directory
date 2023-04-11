import { SpeakeasyBase } from "../../../internal/utils";
import { Hook } from "./hook";
import { HookFilter } from "./hookfilter";
export declare class HookConfigurationRequest extends SpeakeasyBase {
    filter: HookFilter;
    hook: Hook;
}
