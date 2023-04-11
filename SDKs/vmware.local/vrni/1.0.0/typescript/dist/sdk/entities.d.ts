import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Entities APIs
 */
export declare class Entities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show cluster details
     *
     * @remarks
     * Show cluster details
     */
    getCluster(req: operations.GetClusterRequest, security: operations.GetClusterSecurity, config?: AxiosRequestConfig): Promise<operations.GetClusterResponse>;
    /**
     * Show vCenter datacenter details
     *
     * @remarks
     * Show vCenter datacenter details
     */
    getDatacenter(req: operations.GetDatacenterRequest, security: operations.GetDatacenterSecurity, config?: AxiosRequestConfig): Promise<operations.GetDatacenterResponse>;
    /**
     * Show datastore details
     *
     * @remarks
     * Show datastore details
     */
    getDatastore(req: operations.GetDatastoreRequest, security: operations.GetDatastoreSecurity, config?: AxiosRequestConfig): Promise<operations.GetDatastoreResponse>;
    /**
     * Show distributed virtual portgroup details
     *
     * @remarks
     * Show distributed virtual portgroup details
     */
    getDistributedVirtualPortgroup(req: operations.GetDistributedVirtualPortgroupRequest, security: operations.GetDistributedVirtualPortgroupSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistributedVirtualPortgroupResponse>;
    /**
     * Show distributed virtual switch details
     *
     * @remarks
     * Show distributed virtual switch details
     */
    getDistributedVirtualSwitch(req: operations.GetDistributedVirtualSwitchRequest, security: operations.GetDistributedVirtualSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistributedVirtualSwitchResponse>;
    /**
     * Show firewall details
     *
     * @remarks
     * Show firewall details
     */
    getFirewall(req: operations.GetFirewallRequest, security: operations.GetFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.GetFirewallResponse>;
    /**
     * Show firewall rule details
     *
     * @remarks
     * Show firewall rule details
     */
    getFirewallRule(req: operations.GetFirewallRuleRequest, security: operations.GetFirewallRuleSecurity, config?: AxiosRequestConfig): Promise<operations.GetFirewallRuleResponse>;
    /**
     * Show flow details
     *
     * @remarks
     * Show flow details
     */
    getFlow(req: operations.GetFlowRequest, security: operations.GetFlowSecurity, config?: AxiosRequestConfig): Promise<operations.GetFlowResponse>;
    /**
     * List flows
     *
     * @remarks
     * List flows
     */
    getFlows(req: operations.GetFlowsRequest, security: operations.GetFlowsSecurity, config?: AxiosRequestConfig): Promise<operations.GetFlowsResponse>;
    /**
     * Show folder details
     *
     * @remarks
     * Show folder details
     */
    getFolder(req: operations.GetFolderRequest, security: operations.GetFolderSecurity, config?: AxiosRequestConfig): Promise<operations.GetFolderResponse>;
    /**
     * Show host details
     *
     * @remarks
     * Show host details
     */
    getHost(req: operations.GetHostRequest, security: operations.GetHostSecurity, config?: AxiosRequestConfig): Promise<operations.GetHostResponse>;
    /**
     * Show ip set details
     *
     * @remarks
     * Show ip set details
     */
    getIPSet(req: operations.GetIPSetRequest, security: operations.GetIPSetSecurity, config?: AxiosRequestConfig): Promise<operations.GetIPSetResponse>;
    /**
     * Show layer2 network details
     *
     * @remarks
     * Show layer2 network details
     */
    getLayer2Network(req: operations.GetLayer2NetworkRequest, security: operations.GetLayer2NetworkSecurity, config?: AxiosRequestConfig): Promise<operations.GetLayer2NetworkResponse>;
    /**
     * Show nsx manager details
     *
     * @remarks
     * Show nsx manager details
     */
    getNSXManager(req: operations.GetNSXManagerRequest, security: operations.GetNSXManagerSecurity, config?: AxiosRequestConfig): Promise<operations.GetNSXManagerResponse>;
    /**
     * Get name of an entity
     *
     * @remarks
     * Get name of an entity
     */
    getName(req: operations.GetNameRequest, security: operations.GetNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetNameResponse>;
    /**
     * Get names for entities
     *
     * @remarks
     * Get names for entities.Limit of 1000 entities in a single request.
     */
    getNames(req: shared.NamesRequest, security: operations.GetNamesSecurity, config?: AxiosRequestConfig): Promise<operations.GetNamesResponse>;
    /**
     * Show problem details
     *
     * @remarks
     * Show problem event details.
     */
    getProblemEvent(req: operations.GetProblemEventRequest, security: operations.GetProblemEventSecurity, config?: AxiosRequestConfig): Promise<operations.GetProblemEventResponse>;
    /**
     * Show security group details
     *
     * @remarks
     * Show security group details
     */
    getSecurityGroup(req: operations.GetSecurityGroupRequest, security: operations.GetSecurityGroupSecurity, config?: AxiosRequestConfig): Promise<operations.GetSecurityGroupResponse>;
    /**
     * Show security tag details
     *
     * @remarks
     * Show security tag details
     */
    getSecurityTag(req: operations.GetSecurityTagRequest, security: operations.GetSecurityTagSecurity, config?: AxiosRequestConfig): Promise<operations.GetSecurityTagResponse>;
    /**
     * Show service details
     *
     * @remarks
     * Show service details
     */
    getService(req: operations.GetServiceRequest, security: operations.GetServiceSecurity, config?: AxiosRequestConfig): Promise<operations.GetServiceResponse>;
    /**
     * Show service group details
     *
     * @remarks
     * Show service group details
     */
    getServiceGroup(req: operations.GetServiceGroupRequest, security: operations.GetServiceGroupSecurity, config?: AxiosRequestConfig): Promise<operations.GetServiceGroupResponse>;
    /**
     * Show vCenter manager details
     *
     * @remarks
     * Show vCenter manager details
     */
    getVcenterManager(req: operations.GetVcenterManagerRequest, security: operations.GetVcenterManagerSecurity, config?: AxiosRequestConfig): Promise<operations.GetVcenterManagerResponse>;
    /**
     * Show vm details
     *
     * @remarks
     * Show vm details
     */
    getVm(req: operations.GetVmRequest, security: operations.GetVmSecurity, config?: AxiosRequestConfig): Promise<operations.GetVmResponse>;
    /**
     * Show vmknic details
     *
     * @remarks
     * Show vmknic details
     */
    getVmknic(req: operations.GetVmknicRequest, security: operations.GetVmknicSecurity, config?: AxiosRequestConfig): Promise<operations.GetVmknicResponse>;
    /**
     * Show vnic details
     *
     * @remarks
     * Show vnic details
     */
    getVnic(req: operations.GetVnicRequest, security: operations.GetVnicSecurity, config?: AxiosRequestConfig): Promise<operations.GetVnicResponse>;
    /**
     * List clusters
     *
     * @remarks
     * List clusters
     */
    listClusters(req: operations.ListClustersRequest, security: operations.ListClustersSecurity, config?: AxiosRequestConfig): Promise<operations.ListClustersResponse>;
    /**
     * List vCenter datacenters
     *
     * @remarks
     * List vCenter datacenters
     */
    listDatacenters(req: operations.ListDatacentersRequest, security: operations.ListDatacentersSecurity, config?: AxiosRequestConfig): Promise<operations.ListDatacentersResponse>;
    /**
     * List datastores
     *
     * @remarks
     * List datastores
     */
    listDatastores(req: operations.ListDatastoresRequest, security: operations.ListDatastoresSecurity, config?: AxiosRequestConfig): Promise<operations.ListDatastoresResponse>;
    /**
     * List distributed virtual portgroups
     *
     * @remarks
     * List distributed virtual portgroups
     */
    listDistributedVirtualPortgroups(req: operations.ListDistributedVirtualPortgroupsRequest, security: operations.ListDistributedVirtualPortgroupsSecurity, config?: AxiosRequestConfig): Promise<operations.ListDistributedVirtualPortgroupsResponse>;
    /**
     * List distributed virtual switches
     *
     * @remarks
     * List distributed virtual switches
     */
    listDistributedVirtualSwitches(req: operations.ListDistributedVirtualSwitchesRequest, security: operations.ListDistributedVirtualSwitchesSecurity, config?: AxiosRequestConfig): Promise<operations.ListDistributedVirtualSwitchesResponse>;
    /**
     * List firewall rules
     *
     * @remarks
     * List firewall rules
     */
    listFirewallRules(req: operations.ListFirewallRulesRequest, security: operations.ListFirewallRulesSecurity, config?: AxiosRequestConfig): Promise<operations.ListFirewallRulesResponse>;
    /**
     * List firewalls
     *
     * @remarks
     * List firewalls
     */
    listFirewalls(req: operations.ListFirewallsRequest, security: operations.ListFirewallsSecurity, config?: AxiosRequestConfig): Promise<operations.ListFirewallsResponse>;
    /**
     * List folders
     *
     * @remarks
     * List folders
     */
    listFolders(req: operations.ListFoldersRequest, security: operations.ListFoldersSecurity, config?: AxiosRequestConfig): Promise<operations.ListFoldersResponse>;
    /**
     * List hosts
     *
     * @remarks
     * List hosts
     */
    listHosts(req: operations.ListHostsRequest, security: operations.ListHostsSecurity, config?: AxiosRequestConfig): Promise<operations.ListHostsResponse>;
    /**
     * List ip sets
     *
     * @remarks
     * List ip sets
     */
    listIPSets(req: operations.ListIPSetsRequest, security: operations.ListIPSetsSecurity, config?: AxiosRequestConfig): Promise<operations.ListIPSetsResponse>;
    /**
     * List layer2 networks
     *
     * @remarks
     * List layer2 networks
     */
    listLayer2Networks(req: operations.ListLayer2NetworksRequest, security: operations.ListLayer2NetworksSecurity, config?: AxiosRequestConfig): Promise<operations.ListLayer2NetworksResponse>;
    /**
     * List nsx managers
     *
     * @remarks
     * List nsx managers
     */
    listNSXManagers(req: operations.ListNSXManagersRequest, security: operations.ListNSXManagersSecurity, config?: AxiosRequestConfig): Promise<operations.ListNSXManagersResponse>;
    /**
     * List problems
     *
     * @remarks
     * List problem events.
     */
    listProblemEvents(req: operations.ListProblemEventsRequest, security: operations.ListProblemEventsSecurity, config?: AxiosRequestConfig): Promise<operations.ListProblemEventsResponse>;
    /**
     * List security groups
     *
     * @remarks
     * List security groups
     */
    listSecurityGroups(req: operations.ListSecurityGroupsRequest, security: operations.ListSecurityGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.ListSecurityGroupsResponse>;
    /**
     * List security tags
     *
     * @remarks
     * List security tags
     */
    listSecurityTags(req: operations.ListSecurityTagsRequest, security: operations.ListSecurityTagsSecurity, config?: AxiosRequestConfig): Promise<operations.ListSecurityTagsResponse>;
    /**
     * List service groups
     *
     * @remarks
     * List service groups
     */
    listServiceGroups(req: operations.ListServiceGroupsRequest, security: operations.ListServiceGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.ListServiceGroupsResponse>;
    /**
     * List services
     *
     * @remarks
     * List services
     */
    listServices(req: operations.ListServicesRequest, security: operations.ListServicesSecurity, config?: AxiosRequestConfig): Promise<operations.ListServicesResponse>;
    /**
     * List vCenter managers
     *
     * @remarks
     * List vCenter managers
     */
    listVcenterManagers(req: operations.ListVcenterManagersRequest, security: operations.ListVcenterManagersSecurity, config?: AxiosRequestConfig): Promise<operations.ListVcenterManagersResponse>;
    /**
     * List vmknics
     *
     * @remarks
     * List vmknics
     */
    listVmknics(req: operations.ListVmknicsRequest, security: operations.ListVmknicsSecurity, config?: AxiosRequestConfig): Promise<operations.ListVmknicsResponse>;
    /**
     * List vms
     *
     * @remarks
     * List vms
     */
    listVms(req: operations.ListVmsRequest, security: operations.ListVmsSecurity, config?: AxiosRequestConfig): Promise<operations.ListVmsResponse>;
    /**
     * List vnics
     *
     * @remarks
     * List vnics
     */
    listVnics(req: operations.ListVnicsRequest, security: operations.ListVnicsSecurity, config?: AxiosRequestConfig): Promise<operations.ListVnicsResponse>;
}
