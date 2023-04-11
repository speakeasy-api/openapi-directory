import { SpeakeasyBase } from "../../../internal/utils";
import { Antifraud } from "./antifraud";
import { Connector } from "./connector";
import { Issuer } from "./issuer";
import { PaymentSystem } from "./paymentsystem";
import { SalesChannel } from "./saleschannel";
export declare class InsertRuleRequest extends SpeakeasyBase {
    antifraud: Antifraud;
    beginDate: string;
    condition: string;
    connector: Connector;
    country: string;
    dateIntervals: string;
    enabled: boolean;
    endDate: string;
    installmentOptions: string;
    installmentsService: string;
    isDefault: boolean;
    isSelfAuthorized: string;
    issuer: Issuer;
    multiMerchantList: string;
    name: string;
    paymentSystem: PaymentSystem;
    requiresAuthentication: string;
    salesChannels: SalesChannel[];
}
