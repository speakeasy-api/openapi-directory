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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOptionsUpdateResponse = exports.AccountOptionsUpdateRequest = exports.AccountOptionsUpdateSecurity = exports.AccountOptionsUpdateRequests = exports.AccountOptionsUpdateMultipartFormData = exports.AccountOptionsUpdateMultipartFormDataPayModeEnum = exports.AccountOptionsUpdateApplicationJson = exports.AccountOptionsUpdateApplicationJsonPayModeEnum = exports.AccountOptionsUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AccountOptionsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AccountOptionsUpdatePathParams, _super);
    function AccountOptionsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountOptionsUpdatePathParams.prototype, "accountId", void 0);
    return AccountOptionsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.AccountOptionsUpdatePathParams = AccountOptionsUpdatePathParams;
var AccountOptionsUpdateApplicationJsonPayModeEnum;
(function (AccountOptionsUpdateApplicationJsonPayModeEnum) {
    AccountOptionsUpdateApplicationJsonPayModeEnum["Master"] = "master";
    AccountOptionsUpdateApplicationJsonPayModeEnum["Sub"] = "sub";
})(AccountOptionsUpdateApplicationJsonPayModeEnum = exports.AccountOptionsUpdateApplicationJsonPayModeEnum || (exports.AccountOptionsUpdateApplicationJsonPayModeEnum = {}));
// AccountOptionsUpdateApplicationJson
/**
 * Account options object.
**/
var AccountOptionsUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(AccountOptionsUpdateApplicationJson, _super);
    function AccountOptionsUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing_auto_renew" }),
        __metadata("design:type", Boolean)
    ], AccountOptionsUpdateApplicationJson.prototype, "billingAutoRenew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_connector_list" }),
        __metadata("design:type", Array)
    ], AccountOptionsUpdateApplicationJson.prototype, "meetingConnectorList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pay_mode" }),
        __metadata("design:type", String)
    ], AccountOptionsUpdateApplicationJson.prototype, "payMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_connector_list" }),
        __metadata("design:type", Array)
    ], AccountOptionsUpdateApplicationJson.prototype, "roomConnectorList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_mc" }),
        __metadata("design:type", Boolean)
    ], AccountOptionsUpdateApplicationJson.prototype, "shareMc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_rc" }),
        __metadata("design:type", Boolean)
    ], AccountOptionsUpdateApplicationJson.prototype, "shareRc", void 0);
    return AccountOptionsUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountOptionsUpdateApplicationJson = AccountOptionsUpdateApplicationJson;
var AccountOptionsUpdateMultipartFormDataPayModeEnum;
(function (AccountOptionsUpdateMultipartFormDataPayModeEnum) {
    AccountOptionsUpdateMultipartFormDataPayModeEnum["Master"] = "master";
    AccountOptionsUpdateMultipartFormDataPayModeEnum["Sub"] = "sub";
})(AccountOptionsUpdateMultipartFormDataPayModeEnum = exports.AccountOptionsUpdateMultipartFormDataPayModeEnum || (exports.AccountOptionsUpdateMultipartFormDataPayModeEnum = {}));
// AccountOptionsUpdateMultipartFormData
/**
 * Account options object.
**/
var AccountOptionsUpdateMultipartFormData = /** @class */ (function (_super) {
    __extends(AccountOptionsUpdateMultipartFormData, _super);
    function AccountOptionsUpdateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=billing_auto_renew" }),
        __metadata("design:type", Boolean)
    ], AccountOptionsUpdateMultipartFormData.prototype, "billingAutoRenew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=meeting_connector_list;json=true" }),
        __metadata("design:type", Array)
    ], AccountOptionsUpdateMultipartFormData.prototype, "meetingConnectorList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=pay_mode" }),
        __metadata("design:type", String)
    ], AccountOptionsUpdateMultipartFormData.prototype, "payMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=room_connector_list;json=true" }),
        __metadata("design:type", Array)
    ], AccountOptionsUpdateMultipartFormData.prototype, "roomConnectorList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=share_mc" }),
        __metadata("design:type", Boolean)
    ], AccountOptionsUpdateMultipartFormData.prototype, "shareMc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=share_rc" }),
        __metadata("design:type", Boolean)
    ], AccountOptionsUpdateMultipartFormData.prototype, "shareRc", void 0);
    return AccountOptionsUpdateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AccountOptionsUpdateMultipartFormData = AccountOptionsUpdateMultipartFormData;
var AccountOptionsUpdateRequests = /** @class */ (function (_super) {
    __extends(AccountOptionsUpdateRequests, _super);
    function AccountOptionsUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountOptionsUpdateApplicationJson)
    ], AccountOptionsUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AccountOptionsUpdateMultipartFormData)
    ], AccountOptionsUpdateRequests.prototype, "object1", void 0);
    return AccountOptionsUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.AccountOptionsUpdateRequests = AccountOptionsUpdateRequests;
var AccountOptionsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AccountOptionsUpdateSecurity, _super);
    function AccountOptionsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AccountOptionsUpdateSecurity.prototype, "oAuth", void 0);
    return AccountOptionsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountOptionsUpdateSecurity = AccountOptionsUpdateSecurity;
var AccountOptionsUpdateRequest = /** @class */ (function (_super) {
    __extends(AccountOptionsUpdateRequest, _super);
    function AccountOptionsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountOptionsUpdatePathParams)
    ], AccountOptionsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountOptionsUpdateRequests)
    ], AccountOptionsUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountOptionsUpdateSecurity)
    ], AccountOptionsUpdateRequest.prototype, "security", void 0);
    return AccountOptionsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.AccountOptionsUpdateRequest = AccountOptionsUpdateRequest;
var AccountOptionsUpdateResponse = /** @class */ (function (_super) {
    __extends(AccountOptionsUpdateResponse, _super);
    function AccountOptionsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountOptionsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountOptionsUpdateResponse.prototype, "statusCode", void 0);
    return AccountOptionsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.AccountOptionsUpdateResponse = AccountOptionsUpdateResponse;
