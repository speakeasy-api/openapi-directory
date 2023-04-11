import { SpeakeasyBase } from "../../../internal/utils";
import { Antifraud1 } from "./antifraud1";
import { Connector } from "./connector";
import { InstallmentOptions } from "./installmentoptions";
import { Issuer } from "./issuer";
import { PaymentSystem } from "./paymentsystem";
import { SalesChannel } from "./saleschannel";
export declare class RuleByIdRequest extends SpeakeasyBase {
    antifraud: Antifraud1;
    beginDate: string;
    condition: string;
    connector: Connector;
    country: string;
    dateIntervals: string;
    enabled: boolean;
    endDate: string;
    id: string;
    installmentOptions: InstallmentOptions;
    isDefault: string;
    isSelfAuthorized: string;
    issuer: Issuer;
    multiMerchantList: string;
    name: string;
    paymentSystem: PaymentSystem;
    salesChannels: SalesChannel[];
}
