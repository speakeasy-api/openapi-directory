import { Accounts } from "./accounts";
import { Billing } from "./billing";
import { ChatbotMessages } from "./chatbotmessages";
import { ChatChannels } from "./chatchannels";
import { ChatChannelsAccountLevel } from "./chatchannelsaccountlevel";
import { ChatMessages } from "./chatmessages";
import { CloudRecording } from "./cloudrecording";
import { CommonAreaPhones } from "./commonareaphones";
import { Contacts } from "./contacts";
import { Dashboards } from "./dashboards";
import { DeprecatedAPIEndpoints } from "./deprecatedapiendpoints";
import { Devices } from "./devices";
import { Groups } from "./groups";
import { IMChat } from "./imchat";
import { IMGroups } from "./imgroups";
import { Meetings } from "./meetings";
import * as shared from "./models/shared";
import { Pac } from "./pac";
import { Phone } from "./phone";
import { PhoneAutoReceptionists } from "./phoneautoreceptionists";
import { PhoneBlockedList } from "./phoneblockedlist";
import { PhoneCallQueues } from "./phonecallqueues";
import { PhoneDevices } from "./phonedevices";
import { PhoneReports } from "./phonereports";
import { PhoneSharedLineGroups } from "./phonesharedlinegroups";
import { PhoneSite } from "./phonesite";
import { Reports } from "./reports";
import { Roles } from "./roles";
import { Rooms } from "./rooms";
import { RoomsAccount } from "./roomsaccount";
import { RoomsDevices } from "./roomsdevices";
import { RoomsLocation } from "./roomslocation";
import { SIPConnectedAudio } from "./sipconnectedaudio";
import { SIPPhone } from "./sipphone";
import { TrackingField } from "./trackingfield";
import { Tsp } from "./tsp";
import { Users } from "./users";
import { Webinars } from "./webinars";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.zoom.us/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Zoom API allows developers to access information from Zoom. You can use this API to build private services or public applications on the [Zoom App Marketplace](http://marketplace.zoom.us). To learn how to get your credentials and create private/public applications, read our [Authorization Guide](https://marketplace.zoom.us/docs/guides/authorization/credentials).
 *
 * @remarks
 * All endpoints are available via `https` and are located at `api.zoom.us/v2/`.
 *
 * For instance you can list all users on an account via `https://api.zoom.us/v2/users/`.
 */
export declare class SDK {
    /**
     * Account operations
     */
    accounts: Accounts;
    /**
     * Billing operations
     */
    billing: Billing;
    chatChannels: ChatChannels;
    chatChannelsAccountLevel: ChatChannelsAccountLevel;
    /**
     * Chat Messages operations
     */
    chatMessages: ChatMessages;
    chatbotMessages: ChatbotMessages;
    /**
     * Cloud Recording operations
     */
    cloudRecording: CloudRecording;
    commonAreaPhones: CommonAreaPhones;
    /**
     * Contacts operations
     */
    contacts: Contacts;
    /**
     * Dashboard operations
     */
    dashboards: Dashboards;
    deprecatedAPIEndpoints: DeprecatedAPIEndpoints;
    /**
     * H323 Device operations
     */
    devices: Devices;
    /**
     * Group operations
     */
    groups: Groups;
    /**
     * IM Chat operations
     */
    imChat: IMChat;
    /**
     * IM Group operations
     */
    imGroups: IMGroups;
    /**
     * Meeting operations
     */
    meetings: Meetings;
    /**
     * PAC operations
     */
    pac: Pac;
    phone: Phone;
    phoneAutoReceptionists: PhoneAutoReceptionists;
    phoneBlockedList: PhoneBlockedList;
    phoneCallQueues: PhoneCallQueues;
    phoneDevices: PhoneDevices;
    phoneReports: PhoneReports;
    phoneSharedLineGroups: PhoneSharedLineGroups;
    phoneSite: PhoneSite;
    /**
     * Report operations
     */
    reports: Reports;
    /**
     * User Roles
     */
    roles: Roles;
    /**
     * ZoomRooms operations
     */
    rooms: Rooms;
    roomsAccount: RoomsAccount;
    roomsDevices: RoomsDevices;
    roomsLocation: RoomsLocation;
    sipConnectedAudio: SIPConnectedAudio;
    sipPhone: SIPPhone;
    /**
     * TSP operations
     */
    tsp: Tsp;
    /**
     * Tracking Field operations
     */
    trackingField: TrackingField;
    /**
     * User operations
     */
    users: Users;
    /**
     * Webinar operations
     */
    webinars: Webinars;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
