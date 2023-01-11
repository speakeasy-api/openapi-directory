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
exports.AccountPlanAddonCancelResponse = exports.AccountPlanAddonCancelRequest = exports.AccountPlanAddonCancelSecurity = exports.AccountPlanAddonCancelRequests = exports.AccountPlanAddonCancelMultipartFormData = exports.AccountPlanAddonCancelMultipartFormDataActionEnum = exports.AccountPlanAddonCancelApplicationJson = exports.AccountPlanAddonCancelApplicationJsonActionEnum = exports.AccountPlanAddonCancelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AccountPlanAddonCancelPathParams = /** @class */ (function (_super) {
    __extends(AccountPlanAddonCancelPathParams, _super);
    function AccountPlanAddonCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountPlanAddonCancelPathParams.prototype, "accountId", void 0);
    return AccountPlanAddonCancelPathParams;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonCancelPathParams = AccountPlanAddonCancelPathParams;
var AccountPlanAddonCancelApplicationJsonActionEnum;
(function (AccountPlanAddonCancelApplicationJsonActionEnum) {
    AccountPlanAddonCancelApplicationJsonActionEnum["Cancel"] = "cancel";
})(AccountPlanAddonCancelApplicationJsonActionEnum = exports.AccountPlanAddonCancelApplicationJsonActionEnum || (exports.AccountPlanAddonCancelApplicationJsonActionEnum = {}));
// AccountPlanAddonCancelApplicationJson
/**
 * Account plan object
**/
var AccountPlanAddonCancelApplicationJson = /** @class */ (function (_super) {
    __extends(AccountPlanAddonCancelApplicationJson, _super);
    function AccountPlanAddonCancelApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], AccountPlanAddonCancelApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], AccountPlanAddonCancelApplicationJson.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", Number)
    ], AccountPlanAddonCancelApplicationJson.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanAddonCancelApplicationJson.prototype, "type", void 0);
    return AccountPlanAddonCancelApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonCancelApplicationJson = AccountPlanAddonCancelApplicationJson;
var AccountPlanAddonCancelMultipartFormDataActionEnum;
(function (AccountPlanAddonCancelMultipartFormDataActionEnum) {
    AccountPlanAddonCancelMultipartFormDataActionEnum["Cancel"] = "cancel";
})(AccountPlanAddonCancelMultipartFormDataActionEnum = exports.AccountPlanAddonCancelMultipartFormDataActionEnum || (exports.AccountPlanAddonCancelMultipartFormDataActionEnum = {}));
// AccountPlanAddonCancelMultipartFormData
/**
 * Account plan object
**/
var AccountPlanAddonCancelMultipartFormData = /** @class */ (function (_super) {
    __extends(AccountPlanAddonCancelMultipartFormData, _super);
    function AccountPlanAddonCancelMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], AccountPlanAddonCancelMultipartFormData.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=comment" }),
        __metadata("design:type", String)
    ], AccountPlanAddonCancelMultipartFormData.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=reason" }),
        __metadata("design:type", Number)
    ], AccountPlanAddonCancelMultipartFormData.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanAddonCancelMultipartFormData.prototype, "type", void 0);
    return AccountPlanAddonCancelMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonCancelMultipartFormData = AccountPlanAddonCancelMultipartFormData;
var AccountPlanAddonCancelRequests = /** @class */ (function (_super) {
    __extends(AccountPlanAddonCancelRequests, _super);
    function AccountPlanAddonCancelRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountPlanAddonCancelApplicationJson)
    ], AccountPlanAddonCancelRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AccountPlanAddonCancelMultipartFormData)
    ], AccountPlanAddonCancelRequests.prototype, "object1", void 0);
    return AccountPlanAddonCancelRequests;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonCancelRequests = AccountPlanAddonCancelRequests;
var AccountPlanAddonCancelSecurity = /** @class */ (function (_super) {
    __extends(AccountPlanAddonCancelSecurity, _super);
    function AccountPlanAddonCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AccountPlanAddonCancelSecurity.prototype, "oAuth", void 0);
    return AccountPlanAddonCancelSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonCancelSecurity = AccountPlanAddonCancelSecurity;
var AccountPlanAddonCancelRequest = /** @class */ (function (_super) {
    __extends(AccountPlanAddonCancelRequest, _super);
    function AccountPlanAddonCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanAddonCancelPathParams)
    ], AccountPlanAddonCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanAddonCancelRequests)
    ], AccountPlanAddonCancelRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanAddonCancelSecurity)
    ], AccountPlanAddonCancelRequest.prototype, "security", void 0);
    return AccountPlanAddonCancelRequest;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonCancelRequest = AccountPlanAddonCancelRequest;
var AccountPlanAddonCancelResponse = /** @class */ (function (_super) {
    __extends(AccountPlanAddonCancelResponse, _super);
    function AccountPlanAddonCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountPlanAddonCancelResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountPlanAddonCancelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountPlanAddonCancelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AccountPlanAddonCancelResponse.prototype, "accountPlanAddonCancel204ApplicationJSONAny", void 0);
    return AccountPlanAddonCancelResponse;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonCancelResponse = AccountPlanAddonCancelResponse;
