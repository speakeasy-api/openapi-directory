"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = exports.ProvidersStatusEnum = exports.ProvidersAuthTypeEnum = exports.ProvidersAuthParameterEnum = exports.ProvidersAccountTypeEnum = exports.ProvidersPriorityEnum = void 0;
var utils_1 = require("../../../internal/utils");
var capability_1 = require("./capability");
var providersdataset_1 = require("./providersdataset");
var ProvidersPriorityEnum;
(function (ProvidersPriorityEnum) {
    ProvidersPriorityEnum["Popular"] = "POPULAR";
    ProvidersPriorityEnum["Suggested"] = "SUGGESTED";
    ProvidersPriorityEnum["Cobrand"] = "COBRAND";
    ProvidersPriorityEnum["Search"] = "SEARCH";
    ProvidersPriorityEnum["All"] = "ALL";
})(ProvidersPriorityEnum = exports.ProvidersPriorityEnum || (exports.ProvidersPriorityEnum = {}));
var ProvidersAccountTypeEnum;
(function (ProvidersAccountTypeEnum) {
    ProvidersAccountTypeEnum["Current"] = "CURRENT";
    ProvidersAccountTypeEnum["BrokerageCash"] = "BROKERAGE_CASH";
})(ProvidersAccountTypeEnum = exports.ProvidersAccountTypeEnum || (exports.ProvidersAccountTypeEnum = {}));
var ProvidersAuthParameterEnum;
(function (ProvidersAuthParameterEnum) {
    ProvidersAuthParameterEnum["AuthorizationCode"] = "authorizationCode";
    ProvidersAuthParameterEnum["IdToken"] = "idToken";
    ProvidersAuthParameterEnum["AuthResponse"] = "authResponse";
})(ProvidersAuthParameterEnum = exports.ProvidersAuthParameterEnum || (exports.ProvidersAuthParameterEnum = {}));
var ProvidersAuthTypeEnum;
(function (ProvidersAuthTypeEnum) {
    ProvidersAuthTypeEnum["Oauth"] = "OAUTH";
    ProvidersAuthTypeEnum["Credentials"] = "CREDENTIALS";
    ProvidersAuthTypeEnum["MfaCredentials"] = "MFA_CREDENTIALS";
})(ProvidersAuthTypeEnum = exports.ProvidersAuthTypeEnum || (exports.ProvidersAuthTypeEnum = {}));
var ProvidersStatusEnum;
(function (ProvidersStatusEnum) {
    ProvidersStatusEnum["Supported"] = "Supported";
    ProvidersStatusEnum["Beta"] = "Beta";
    ProvidersStatusEnum["Unsupported"] = "Unsupported";
})(ProvidersStatusEnum = exports.ProvidersStatusEnum || (exports.ProvidersStatusEnum = {}));
var Providers = /** @class */ (function (_super) {
    __extends(Providers, _super);
    function Providers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PRIORITY" }),
        __metadata("design:type", String)
    ], Providers.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountType" }),
        __metadata("design:type", Array)
    ], Providers.prototype, "accountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associatedProviderIds" }),
        __metadata("design:type", Array)
    ], Providers.prototype, "associatedProviderIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authParameter" }),
        __metadata("design:type", Array)
    ], Providers.prototype, "authParameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authType" }),
        __metadata("design:type", String)
    ], Providers.prototype, "authType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baseUrl" }),
        __metadata("design:type", String)
    ], Providers.prototype, "baseUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capability", elemType: capability_1.Capability }),
        __metadata("design:type", Array)
    ], Providers.prototype, "capability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countryISOCode" }),
        __metadata("design:type", String)
    ], Providers.prototype, "countryISOCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataset", elemType: providersdataset_1.ProvidersDataset }),
        __metadata("design:type", Array)
    ], Providers.prototype, "dataset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=favicon" }),
        __metadata("design:type", String)
    ], Providers.prototype, "favicon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forgetPasswordUrl" }),
        __metadata("design:type", String)
    ], Providers.prototype, "forgetPasswordUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=help" }),
        __metadata("design:type", String)
    ], Providers.prototype, "help", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Providers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isAddedByUser" }),
        __metadata("design:type", String)
    ], Providers.prototype, "isAddedByUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isAutoRefreshEnabled" }),
        __metadata("design:type", Boolean)
    ], Providers.prototype, "isAutoRefreshEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isConsentRequired" }),
        __metadata("design:type", Boolean)
    ], Providers.prototype, "isConsentRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageISOCode" }),
        __metadata("design:type", String)
    ], Providers.prototype, "languageISOCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastModified" }),
        __metadata("design:type", String)
    ], Providers.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loginHelp" }),
        __metadata("design:type", String)
    ], Providers.prototype, "loginHelp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loginUrl" }),
        __metadata("design:type", String)
    ], Providers.prototype, "loginUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], Providers.prototype, "logo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Providers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primaryLanguageISOCode" }),
        __metadata("design:type", String)
    ], Providers.prototype, "primaryLanguageISOCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Providers.prototype, "status", void 0);
    return Providers;
}(utils_1.SpeakeasyBase));
exports.Providers = Providers;
