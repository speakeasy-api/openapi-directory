import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressMembershipCriteria } from "./ipaddressmembershipcriteria";
import { SearchMembershipCriteria } from "./searchmembershipcriteria";
export declare enum GroupMembershipCriteriaMembershipTypeEnum {
    SearchMembershipCriteria = "SearchMembershipCriteria",
    IPAddressMembershipCriteria = "IPAddressMembershipCriteria"
}
/**
 * EntityType currently restricted to VirtualMachine
 */
export declare class GroupMembershipCriteria extends SpeakeasyBase {
    /**
     * Ip Address membership definition
     */
    ipAddressMembershipCriteria?: IpAddressMembershipCriteria;
    membershipType?: GroupMembershipCriteriaMembershipTypeEnum;
    searchMembershipCriteria?: SearchMembershipCriteria;
}
