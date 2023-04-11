import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Data source APIs
 */
export declare class DataSources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an arista switch data source
     *
     * @remarks
     * Add arista switch data source
     */
    addAristaSwitch(req: shared.SwitchDataSourceRequest, security: operations.AddAristaSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.AddAristaSwitchResponse>;
    /**
     * Create a brocade switch data source
     *
     * @remarks
     * Add brocade switch as a data source
     */
    addBrocadeSwitch(req: shared.SwitchDataSourceRequest, security: operations.AddBrocadeSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.AddBrocadeSwitchResponse>;
    /**
     * Create a checkpoint firewall
     *
     * @remarks
     * Add checkpoint firewall as data source
     */
    addCheckpointFirewall(req: shared.SwitchDataSourceRequest, security: operations.AddCheckpointFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.AddCheckpointFirewallResponse>;
    /**
     * Create a cisco switch data source
     *
     * @remarks
     * Add cisco switch as data source. User must provide one of ip or fqdn field in the request body.
     * Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.
     */
    addCiscoSwitch(req: shared.CiscoSwitchDataSourceRequest, security: operations.AddCiscoSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.AddCiscoSwitchResponse>;
    /**
     * Create a dell switch data source
     *
     * @remarks
     * Add a dell switch as data source
     */
    addDellSwitch(req: shared.DellSwitchDataSourceRequest, security: operations.AddDellSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.AddDellSwitchResponse>;
    /**
     * Create a hp oneview manager data source
     *
     * @remarks
     * Add a hp oneview manager data source
     */
    addHpovManager(req: shared.SwitchDataSource, security: operations.AddHpovManagerSecurity, config?: AxiosRequestConfig): Promise<operations.AddHpovManagerResponse>;
    /**
     * Create a hpvc manager data source
     *
     * @remarks
     * Add hpvc manager data source
     */
    addHpvcManager(req: shared.SwitchDataSource, security: operations.AddHpvcManagerSecurity, config?: AxiosRequestConfig): Promise<operations.AddHpvcManagerResponse>;
    /**
     * Add a juniper switch as data source
     *
     * @remarks
     * Add switch Datasource
     */
    addJuniperSwitch(req: shared.SwitchDataSourceRequest, security: operations.AddJuniperSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.AddJuniperSwitchResponse>;
    /**
     * Create a nsx-v manager data source
     *
     * @remarks
     * Add a nsx-v manager data source
     */
    addNsxvManagerDatasource(req: shared.NSXVManagerDataSourceRequest, security: operations.AddNsxvManagerDatasourceSecurity, config?: AxiosRequestConfig): Promise<operations.AddNsxvManagerDatasourceResponse>;
    /**
     * Create panorama firewall data source
     *
     * @remarks
     * Add panorama firewall as data source
     */
    addPanoramaFirewall(req: shared.SwitchDataSourceRequest, security: operations.AddPanoramaFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.AddPanoramaFirewallResponse>;
    /**
     * Create an ucs manager data source
     *
     * @remarks
     * Add an ucs manager as data source
     */
    addUcsManager(req: shared.SwitchDataSource, security: operations.AddUcsManagerSecurity, config?: AxiosRequestConfig): Promise<operations.AddUcsManagerResponse>;
    /**
     * Create a vCenter data source
     *
     * @remarks
     * Add a vcenter data source. User must provide one of ip or fqdn field in the request body.
     * Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.
     */
    addVcenterDatasource(req: shared.VCenterDataSourceRequest, security: operations.AddVcenterDatasourceSecurity, config?: AxiosRequestConfig): Promise<operations.AddVcenterDatasourceResponse>;
    /**
     * Delete an arista switch data source
     *
     * @remarks
     * Delete an arista switch data source
     */
    deleteAristaSwitch(req: operations.DeleteAristaSwitchRequest, security: operations.DeleteAristaSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAristaSwitchResponse>;
    /**
     * Delete a brocade switch data source
     *
     * @remarks
     * Delete a brocade switch data source
     */
    deleteBrocadeSwitch(req: operations.DeleteBrocadeSwitchRequest, security: operations.DeleteBrocadeSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteBrocadeSwitchResponse>;
    /**
     * Delete a checkpoint firewall data source
     *
     * @remarks
     * Delete a checkpoint firewall data source
     */
    deleteCheckpointFirewall(req: operations.DeleteCheckpointFirewallRequest, security: operations.DeleteCheckpointFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCheckpointFirewallResponse>;
    /**
     * Delete a cisco switch data source
     *
     * @remarks
     * Delete a cisco switch data source
     */
    deleteCiscoSwitch(req: operations.DeleteCiscoSwitchRequest, security: operations.DeleteCiscoSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCiscoSwitchResponse>;
    /**
     * Delete a dell switch data source
     *
     * @remarks
     * Delete a data source
     */
    deleteDellSwitch(req: operations.DeleteDellSwitchRequest, security: operations.DeleteDellSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteDellSwitchResponse>;
    /**
     * Delete a hp oneview data source
     *
     * @remarks
     * Delete a hp oneview data source
     */
    deleteHpovManager(req: operations.DeleteHpovManagerRequest, security: operations.DeleteHpovManagerSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteHpovManagerResponse>;
    /**
     * Delete a hpvc manager data source
     *
     * @remarks
     * Delete a hpvc manager data source
     */
    deleteHpvcManager(req: operations.DeleteHpvcManagerRequest, security: operations.DeleteHpvcManagerSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteHpvcManagerResponse>;
    /**
     * Delete a juniper switch data source
     *
     * @remarks
     * Delete a juniper switch data source
     */
    deleteJuniperSwitch(req: operations.DeleteJuniperSwitchRequest, security: operations.DeleteJuniperSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteJuniperSwitchResponse>;
    /**
     * Delete a nsx-v manager data source
     *
     * @remarks
     * Delete a nsx-v manager data source
     */
    deleteNsxvManager(req: operations.DeleteNsxvManagerRequest, security: operations.DeleteNsxvManagerSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteNsxvManagerResponse>;
    /**
     * Delete a panorama firewall data source
     *
     * @remarks
     * Delete a panorama firewall data source
     */
    deletePanoramaFirewall(req: operations.DeletePanoramaFirewallRequest, security: operations.DeletePanoramaFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.DeletePanoramaFirewallResponse>;
    /**
     * Delete an ucs manager data source
     *
     * @remarks
     * Delete an ucs manager data source
     */
    deleteUcsManager(req: operations.DeleteUcsManagerRequest, security: operations.DeleteUcsManagerSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteUcsManagerResponse>;
    /**
     * Delete a vCenter data source
     *
     * @remarks
     * Delete a data source
     */
    deleteVcenter(req: operations.DeleteVcenterRequest, security: operations.DeleteVcenterSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVcenterResponse>;
    /**
     * Disable an arista switch data source
     *
     * @remarks
     * Disable an arista switch data source
     */
    disableAristaSwitch(req: operations.DisableAristaSwitchRequest, security: operations.DisableAristaSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.DisableAristaSwitchResponse>;
    /**
     * Disable a brocade switch data source
     */
    disableBrocadeSwitch(req: operations.DisableBrocadeSwitchRequest, security: operations.DisableBrocadeSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.DisableBrocadeSwitchResponse>;
    /**
     * Disable a checkpoint firewall data source
     *
     * @remarks
     * Disable a checkpoint firewall data source
     */
    disableCheckpointFirewall(req: operations.DisableCheckpointFirewallRequest, security: operations.DisableCheckpointFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.DisableCheckpointFirewallResponse>;
    /**
     * Disable a cisco switch data source
     *
     * @remarks
     * Disable a cisco switch data source
     */
    disableCiscoSwitch(req: operations.DisableCiscoSwitchRequest, security: operations.DisableCiscoSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.DisableCiscoSwitchResponse>;
    /**
     * Disable a dell switch data source
     *
     * @remarks
     * Disable a dell switch data source
     */
    disableDellSwitch(req: operations.DisableDellSwitchRequest, security: operations.DisableDellSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.DisableDellSwitchResponse>;
    /**
     * Disable a hp oneview data source
     *
     * @remarks
     * Disable a hp oneview data source
     */
    disableHpovManager(req: operations.DisableHpovManagerRequest, security: operations.DisableHpovManagerSecurity, config?: AxiosRequestConfig): Promise<operations.DisableHpovManagerResponse>;
    /**
     * Disable a hpvc manager data source
     *
     * @remarks
     * Disable a hpvc manager data source
     */
    disableHpvcManager(req: operations.DisableHpvcManagerRequest, security: operations.DisableHpvcManagerSecurity, config?: AxiosRequestConfig): Promise<operations.DisableHpvcManagerResponse>;
    /**
     * Disable a juniper switch data source
     *
     * @remarks
     * Disable a juniper switch data source
     */
    disableJuniperSwitch(req: operations.DisableJuniperSwitchRequest, security: operations.DisableJuniperSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.DisableJuniperSwitchResponse>;
    /**
     * Disable a nsx-v manager data source
     *
     * @remarks
     * Disable a nsx-v manager data source
     */
    disableNsxvManager(req: operations.DisableNsxvManagerRequest, security: operations.DisableNsxvManagerSecurity, config?: AxiosRequestConfig): Promise<operations.DisableNsxvManagerResponse>;
    /**
     * Disable a panorama firewall data source
     *
     * @remarks
     * Disable a panorama firewall data source
     */
    disablePanoramaFirewall(req: operations.DisablePanoramaFirewallRequest, security: operations.DisablePanoramaFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.DisablePanoramaFirewallResponse>;
    /**
     * Disable an ucs manager data source
     *
     * @remarks
     * Disable an ucs manager data source
     */
    disableUcsManager(req: operations.DisableUcsManagerRequest, security: operations.DisableUcsManagerSecurity, config?: AxiosRequestConfig): Promise<operations.DisableUcsManagerResponse>;
    /**
     * Disable a vCenter data source
     *
     * @remarks
     * Disable a vCenter data source
     */
    disableVcenter(req: operations.DisableVcenterRequest, security: operations.DisableVcenterSecurity, config?: AxiosRequestConfig): Promise<operations.DisableVcenterResponse>;
    /**
     * Enable an arista switch data source
     *
     * @remarks
     * Enable an arista switch data source
     */
    enableAristaSwitch(req: operations.EnableAristaSwitchRequest, security: operations.EnableAristaSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.EnableAristaSwitchResponse>;
    /**
     * Enable a brocade switch data source
     */
    enableBrocadeSwitch(req: operations.EnableBrocadeSwitchRequest, security: operations.EnableBrocadeSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.EnableBrocadeSwitchResponse>;
    /**
     * Enable a checkpoint firewall data source
     *
     * @remarks
     * Enable a checkpoint firewall data source
     */
    enableCheckpointFirewall(req: operations.EnableCheckpointFirewallRequest, security: operations.EnableCheckpointFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.EnableCheckpointFirewallResponse>;
    /**
     * Enable a cisco switch data source
     *
     * @remarks
     * Enable a cisco switch data source
     */
    enableCiscoSwitch(req: operations.EnableCiscoSwitchRequest, security: operations.EnableCiscoSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.EnableCiscoSwitchResponse>;
    /**
     * Enable a dell switch data source
     *
     * @remarks
     * Enable a dell switch data source
     */
    enableDellSwitch(req: operations.EnableDellSwitchRequest, security: operations.EnableDellSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.EnableDellSwitchResponse>;
    /**
     * Enable a hp oneview data source
     *
     * @remarks
     * Enable a hp oneview data source
     */
    enableHpovManager(req: operations.EnableHpovManagerRequest, security: operations.EnableHpovManagerSecurity, config?: AxiosRequestConfig): Promise<operations.EnableHpovManagerResponse>;
    /**
     * Enable a hpvc manager data source
     *
     * @remarks
     * Enable a hpvc manager data source
     */
    enableHpvcManager(req: operations.EnableHpvcManagerRequest, security: operations.EnableHpvcManagerSecurity, config?: AxiosRequestConfig): Promise<operations.EnableHpvcManagerResponse>;
    /**
     * Enable a juniper switch data source
     *
     * @remarks
     * Enable a juniper switch data source
     */
    enableJuniperSwitch(req: operations.EnableJuniperSwitchRequest, security: operations.EnableJuniperSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.EnableJuniperSwitchResponse>;
    /**
     * Enable a nsx-v manager data source
     *
     * @remarks
     * Enable a nsx-v manager data source
     */
    enableNsxvManager(req: operations.EnableNsxvManagerRequest, security: operations.EnableNsxvManagerSecurity, config?: AxiosRequestConfig): Promise<operations.EnableNsxvManagerResponse>;
    /**
     * Enable a panorama firewall data source
     *
     * @remarks
     * Enable a panorama firewall data source
     */
    enablePanoramaFirewall(req: operations.EnablePanoramaFirewallRequest, security: operations.EnablePanoramaFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.EnablePanoramaFirewallResponse>;
    /**
     * Enable an ucs manager data source
     *
     * @remarks
     * Enable an ucs manager data source
     */
    enableUcsManager(req: operations.EnableUcsManagerRequest, security: operations.EnableUcsManagerSecurity, config?: AxiosRequestConfig): Promise<operations.EnableUcsManagerResponse>;
    /**
     * Enable a vCenter data source
     *
     * @remarks
     * Enable a vCenter data source
     */
    enableVcenter(req: operations.EnableVcenterRequest, security: operations.EnableVcenterSecurity, config?: AxiosRequestConfig): Promise<operations.EnableVcenterResponse>;
    /**
     * Show arista switch data source details
     *
     * @remarks
     * Show arista switch data source details
     */
    getAristaSwitch(req: operations.GetAristaSwitchRequest, security: operations.GetAristaSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.GetAristaSwitchResponse>;
    /**
     * Show snmp config for arista switch data source
     *
     * @remarks
     * Show snmp config for arista switch data source
     */
    getAristaSwitchSnmpConfig(req: operations.GetAristaSwitchSnmpConfigRequest, security: operations.GetAristaSwitchSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.GetAristaSwitchSnmpConfigResponse>;
    /**
     * Show brocade switch data source details
     *
     * @remarks
     * Show brocade switch data source details
     */
    getBrocadeSwitch(req: operations.GetBrocadeSwitchRequest, security: operations.GetBrocadeSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.GetBrocadeSwitchResponse>;
    /**
     * Show snmp config for brocade switch data source
     *
     * @remarks
     * Show snmp config for brocade switch data source
     */
    getBrocadeSwitchSnmpConfig(req: operations.GetBrocadeSwitchSnmpConfigRequest, security: operations.GetBrocadeSwitchSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.GetBrocadeSwitchSnmpConfigResponse>;
    /**
     * Show checkpoint firewall data source details
     *
     * @remarks
     * Show checkpoint firewall data source details
     */
    getCheckpointFirewall(req: operations.GetCheckpointFirewallRequest, security: operations.GetCheckpointFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.GetCheckpointFirewallResponse>;
    /**
     * Show cisco switch data source details
     *
     * @remarks
     * Show cisco switch data source details
     */
    getCiscoSwitch(req: operations.GetCiscoSwitchRequest, security: operations.GetCiscoSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.GetCiscoSwitchResponse>;
    /**
     * Show snmp config for cisco switch data source
     *
     * @remarks
     * Show snmp config for cisco switch data source
     */
    getCiscoSwitchSnmpConfig(req: operations.GetCiscoSwitchSnmpConfigRequest, security: operations.GetCiscoSwitchSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.GetCiscoSwitchSnmpConfigResponse>;
    /**
     * Show dell switch data source details
     *
     * @remarks
     * Get a dell switch data source details
     */
    getDellSwitch(req: operations.GetDellSwitchRequest, security: operations.GetDellSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.GetDellSwitchResponse>;
    /**
     * Show snmp config for dell switch data source
     *
     * @remarks
     * Show snmp config for dell switch data source
     */
    getDellSwitchSnmpConfig(req: operations.GetDellSwitchSnmpConfigRequest, security: operations.GetDellSwitchSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.GetDellSwitchSnmpConfigResponse>;
    /**
     * Show hp oneview data source details
     *
     * @remarks
     * Show hp oneview data source details
     */
    getHpovManager(req: operations.GetHpovManagerRequest, security: operations.GetHpovManagerSecurity, config?: AxiosRequestConfig): Promise<operations.GetHpovManagerResponse>;
    /**
     * Show hpvc data source details
     *
     * @remarks
     * Show hpvc data source details
     */
    getHpvcManager(req: operations.GetHpvcManagerRequest, security: operations.GetHpvcManagerSecurity, config?: AxiosRequestConfig): Promise<operations.GetHpvcManagerResponse>;
    /**
     * Show juniper switch data source details
     *
     * @remarks
     * Show juniper switch data source details
     */
    getJuniperSwitch(req: operations.GetJuniperSwitchRequest, security: operations.GetJuniperSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.GetJuniperSwitchResponse>;
    /**
     * Show snmp config for juniper switch data source
     *
     * @remarks
     * Show snmp config for juniper switch data source
     */
    getJuniperSwitchSnmpConfig(req: operations.GetJuniperSwitchSnmpConfigRequest, security: operations.GetJuniperSwitchSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.GetJuniperSwitchSnmpConfigResponse>;
    /**
     * Show nsx controller-cluster details
     *
     * @remarks
     * Show nsx controller-cluster details
     */
    getNsxvControllerCluster(req: operations.GetNsxvControllerClusterRequest, security: operations.GetNsxvControllerClusterSecurity, config?: AxiosRequestConfig): Promise<operations.GetNsxvControllerClusterResponse>;
    /**
     * Show nsx-v manager data source details
     *
     * @remarks
     * Show nsx-v manager data source details
     */
    getNsxvManager(req: operations.GetNsxvManagerRequest, security: operations.GetNsxvManagerSecurity, config?: AxiosRequestConfig): Promise<operations.GetNsxvManagerResponse>;
    /**
     * Show panorama firewall data source details
     *
     * @remarks
     * Show panorama firewall data source details
     */
    getPanoramaFirewall(req: operations.GetPanoramaFirewallRequest, security: operations.GetPanoramaFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.GetPanoramaFirewallResponse>;
    /**
     * Show ucs manager data source details
     *
     * @remarks
     * Show ucs manager data source details
     */
    getUcsManager(req: operations.GetUcsManagerRequest, security: operations.GetUcsManagerSecurity, config?: AxiosRequestConfig): Promise<operations.GetUcsManagerResponse>;
    /**
     * Show snmp config for ucs fabric interconnects
     *
     * @remarks
     * Show snmp config for ucs fabric interconnects
     */
    getUcsSnmpConfig(req: operations.GetUcsSnmpConfigRequest, security: operations.GetUcsSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.GetUcsSnmpConfigResponse>;
    /**
     * Show vCenter data source details
     *
     * @remarks
     * Show vCenter data source details
     */
    getVcenter(req: operations.GetVcenterRequest, security: operations.GetVcenterSecurity, config?: AxiosRequestConfig): Promise<operations.GetVcenterResponse>;
    /**
     * List arista switch data sources
     *
     * @remarks
     * List arista switch data sources
     */
    listAristaSwitches(config?: AxiosRequestConfig): Promise<operations.ListAristaSwitchesResponse>;
    /**
     * List brocade switch data sources
     *
     * @remarks
     * List brocade switch data sources
     */
    listBrocadeSwitches(config?: AxiosRequestConfig): Promise<operations.ListBrocadeSwitchesResponse>;
    /**
     * List checkpoint firewall data sources
     *
     * @remarks
     * List checkpoint firewall data sources
     */
    listCheckpointFirewalls(config?: AxiosRequestConfig): Promise<operations.ListCheckpointFirewallsResponse>;
    /**
     * List cisco switch data sources
     *
     * @remarks
     * List cisco switch data sources
     */
    listCiscoSwitches(config?: AxiosRequestConfig): Promise<operations.ListCiscoSwitchesResponse>;
    /**
     * List dell switch data sources
     *
     * @remarks
     * List dell switch data sources
     */
    listDellSwitches(config?: AxiosRequestConfig): Promise<operations.ListDellSwitchesResponse>;
    /**
     * List hp oneview manager data sources
     *
     * @remarks
     * List hp oneview manager data sources
     */
    listHpovManagers(config?: AxiosRequestConfig): Promise<operations.ListHpovManagersResponse>;
    /**
     * List hpvc manager data sources
     *
     * @remarks
     * List hpvc manager data sources
     */
    listHpvcManagers(config?: AxiosRequestConfig): Promise<operations.ListHpvcManagersResponse>;
    /**
     * List juniper switch data sources
     *
     * @remarks
     * List juniper switch data sources
     */
    listJuniperSwitches(config?: AxiosRequestConfig): Promise<operations.ListJuniperSwitchesResponse>;
    /**
     * List nsx-v manager data sources
     *
     * @remarks
     * List nsx-v manager data sources
     */
    listNsxvManagers(config?: AxiosRequestConfig): Promise<operations.ListNsxvManagersResponse>;
    /**
     * List panorama firewall data sources
     *
     * @remarks
     * List panorama firewall data sources
     */
    listPanoramaFirewalls(config?: AxiosRequestConfig): Promise<operations.ListPanoramaFirewallsResponse>;
    /**
     * List ucs manager data sources
     *
     * @remarks
     * List ucs manager data sources
     */
    listUcsManagers(config?: AxiosRequestConfig): Promise<operations.ListUcsManagersResponse>;
    /**
     * List vCenter data sources
     *
     * @remarks
     * List vCenter data sources
     */
    listVcenters(config?: AxiosRequestConfig): Promise<operations.ListVcentersResponse>;
    /**
     * Update an arista switch data source
     *
     * @remarks
     * Update an switch data source
     */
    updateAristaSwitch(req: operations.UpdateAristaSwitchRequest, security: operations.UpdateAristaSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAristaSwitchResponse>;
    /**
     * Update snmp config for arista switch data source
     *
     * @remarks
     * Update snmp config for arista switch data source
     */
    updateAristaSwitchSnmpConfig(req: operations.UpdateAristaSwitchSnmpConfigRequest, security: operations.UpdateAristaSwitchSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAristaSwitchSnmpConfigResponse>;
    /**
     * Update a brocade switch data source
     *
     * @remarks
     * Update a brocade switch data source. Only credentials, nickname and notes can be updated.
     */
    updateBrocadeSwitch(req: operations.UpdateBrocadeSwitchRequest, security: operations.UpdateBrocadeSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateBrocadeSwitchResponse>;
    /**
     * Update snmp config for brocade switch data source
     *
     * @remarks
     * Update snmp config for brocade switch data source
     */
    updateBrocadeSwitchSnmpConfig(req: operations.UpdateBrocadeSwitchSnmpConfigRequest, security: operations.UpdateBrocadeSwitchSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateBrocadeSwitchSnmpConfigResponse>;
    /**
     * Update a checkpoint firewall data source
     *
     * @remarks
     * Update a checkpoint firewall data source
     */
    updateCheckpointFirewall(req: operations.UpdateCheckpointFirewallRequest, security: operations.UpdateCheckpointFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCheckpointFirewallResponse>;
    /**
     * Update a cisco switch data source
     *
     * @remarks
     * Update a cisco switch data source. Only credentials, nickname and notes can be updated.
     */
    updateCiscoSwitch(req: operations.UpdateCiscoSwitchRequest, security: operations.UpdateCiscoSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCiscoSwitchResponse>;
    /**
     * Update snmp config for cisco switch data source
     *
     * @remarks
     * Update snmp config for cisco switch data source
     */
    updateCiscoSwitchSnmpConfig(req: operations.UpdateCiscoSwitchSnmpConfigRequest, security: operations.UpdateCiscoSwitchSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCiscoSwitchSnmpConfigResponse>;
    /**
     * Update a dell switch data source
     *
     * @remarks
     * Update a dell switch data source. Only credentials, nickname and notes can be updated
     */
    updateDellSwitch(req: operations.UpdateDellSwitchRequest, security: operations.UpdateDellSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateDellSwitchResponse>;
    /**
     * Update snmp config for dell switch data source
     *
     * @remarks
     * Update snmp config for dell switch data source
     */
    updateDellSwitchSnmpConfig(req: operations.UpdateDellSwitchSnmpConfigRequest, security: operations.UpdateDellSwitchSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateDellSwitchSnmpConfigResponse>;
    /**
     * Update a hp oneview data source
     *
     * @remarks
     * Update a hp oneview data source
     */
    updateHpovManager(req: operations.UpdateHpovManagerRequest, security: operations.UpdateHpovManagerSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateHpovManagerResponse>;
    /**
     * Update a hpvc manager data source
     *
     * @remarks
     * Update a hpvc manager data source
     */
    updateHpvcManager(req: operations.UpdateHpvcManagerRequest, security: operations.UpdateHpvcManagerSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateHpvcManagerResponse>;
    /**
     * Update a juniper switch data source
     *
     * @remarks
     * Update a juniper switch data source
     */
    updateJuniperSwitch(req: operations.UpdateJuniperSwitchRequest, security: operations.UpdateJuniperSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateJuniperSwitchResponse>;
    /**
     * Update snmp config for a juniper switch data source
     *
     * @remarks
     * Update snmp config for a juniper switch data source
     */
    updateJuniperSwitchSnmpConfig(req: operations.UpdateJuniperSwitchSnmpConfigRequest, security: operations.UpdateJuniperSwitchSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateJuniperSwitchSnmpConfigResponse>;
    /**
     * Update nsx controller-cluster details
     *
     * @remarks
     * Update nsx controller-cluster details
     */
    updateNsxvControllerCluster(req: operations.UpdateNsxvControllerClusterRequest, security: operations.UpdateNsxvControllerClusterSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateNsxvControllerClusterResponse>;
    /**
     * Update a nsx-v manager data source
     *
     * @remarks
     * Update a nsx-v manager data source
     */
    updateNsxvManager(req: operations.UpdateNsxvManagerRequest, security: operations.UpdateNsxvManagerSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateNsxvManagerResponse>;
    /**
     * Update a panorama firewall data source
     *
     * @remarks
     * Update a panorama firewall data source
     */
    updatePanoramaFirewall(req: operations.UpdatePanoramaFirewallRequest, security: operations.UpdatePanoramaFirewallSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePanoramaFirewallResponse>;
    /**
     * Update an ucs manager data source
     *
     * @remarks
     * Update an ucs manager data source
     */
    updateUcsManager(req: operations.UpdateUcsManagerRequest, security: operations.UpdateUcsManagerSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateUcsManagerResponse>;
    /**
     * Update snmp config for ucs fabric interconnects
     *
     * @remarks
     * Update snmp config for ucs fabric interconnects
     */
    updateUcsSnmpConfig(req: operations.UpdateUcsSnmpConfigRequest, security: operations.UpdateUcsSnmpConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateUcsSnmpConfigResponse>;
    /**
     * Update a vCenter data source.
     *
     * @remarks
     * Update a vcenter data source. Only nickname, notes and credentials can be updated.
     */
    updateVcenter(req: operations.UpdateVcenterRequest, security: operations.UpdateVcenterSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateVcenterResponse>;
}
