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
exports.GetPhoneNumberDetailsResponse = exports.GetPhoneNumberDetailsRequest = exports.GetPhoneNumberDetails200ApplicationJson = exports.GetPhoneNumberDetails200ApplicationJsonStatusEnum = exports.GetPhoneNumberDetails200ApplicationJsonSourceEnum = exports.GetPhoneNumberDetails200ApplicationJsonSite = exports.GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum = exports.GetPhoneNumberDetails200ApplicationJsonAssignee = exports.GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum = exports.GetPhoneNumberDetailsSecurity = exports.GetPhoneNumberDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPhoneNumberDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetPhoneNumberDetailsPathParams, _super);
    function GetPhoneNumberDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=numberId" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetailsPathParams.prototype, "numberId", void 0);
    return GetPhoneNumberDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPhoneNumberDetailsPathParams = GetPhoneNumberDetailsPathParams;
var GetPhoneNumberDetailsSecurity = /** @class */ (function (_super) {
    __extends(GetPhoneNumberDetailsSecurity, _super);
    function GetPhoneNumberDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetPhoneNumberDetailsSecurity.prototype, "oAuth", void 0);
    return GetPhoneNumberDetailsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPhoneNumberDetailsSecurity = GetPhoneNumberDetailsSecurity;
var GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum;
(function (GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum) {
    GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum["User"] = "user";
    GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum["CallQueue"] = "callQueue";
    GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum["AutoReceptionist"] = "autoReceptionist";
    GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum["CommonAreaPhone"] = "commonAreaPhone";
})(GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum = exports.GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum || (exports.GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum = {}));
var GetPhoneNumberDetails200ApplicationJsonAssignee = /** @class */ (function (_super) {
    __extends(GetPhoneNumberDetails200ApplicationJsonAssignee, _super);
    function GetPhoneNumberDetails200ApplicationJsonAssignee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], GetPhoneNumberDetails200ApplicationJsonAssignee.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJsonAssignee.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJsonAssignee.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJsonAssignee.prototype, "type", void 0);
    return GetPhoneNumberDetails200ApplicationJsonAssignee;
}(utils_1.SpeakeasyBase));
exports.GetPhoneNumberDetails200ApplicationJsonAssignee = GetPhoneNumberDetails200ApplicationJsonAssignee;
var GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum;
(function (GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum) {
    GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum["Toll"] = "toll";
    GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum["Tollfree"] = "tollfree";
})(GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum = exports.GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum || (exports.GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum = {}));
var GetPhoneNumberDetails200ApplicationJsonSite = /** @class */ (function (_super) {
    __extends(GetPhoneNumberDetails200ApplicationJsonSite, _super);
    function GetPhoneNumberDetails200ApplicationJsonSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJsonSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJsonSite.prototype, "name", void 0);
    return GetPhoneNumberDetails200ApplicationJsonSite;
}(utils_1.SpeakeasyBase));
exports.GetPhoneNumberDetails200ApplicationJsonSite = GetPhoneNumberDetails200ApplicationJsonSite;
var GetPhoneNumberDetails200ApplicationJsonSourceEnum;
(function (GetPhoneNumberDetails200ApplicationJsonSourceEnum) {
    GetPhoneNumberDetails200ApplicationJsonSourceEnum["Internal"] = "internal";
    GetPhoneNumberDetails200ApplicationJsonSourceEnum["External"] = "external";
})(GetPhoneNumberDetails200ApplicationJsonSourceEnum = exports.GetPhoneNumberDetails200ApplicationJsonSourceEnum || (exports.GetPhoneNumberDetails200ApplicationJsonSourceEnum = {}));
var GetPhoneNumberDetails200ApplicationJsonStatusEnum;
(function (GetPhoneNumberDetails200ApplicationJsonStatusEnum) {
    GetPhoneNumberDetails200ApplicationJsonStatusEnum["Pending"] = "pending";
    GetPhoneNumberDetails200ApplicationJsonStatusEnum["Available"] = "available";
})(GetPhoneNumberDetails200ApplicationJsonStatusEnum = exports.GetPhoneNumberDetails200ApplicationJsonStatusEnum || (exports.GetPhoneNumberDetails200ApplicationJsonStatusEnum = {}));
var GetPhoneNumberDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPhoneNumberDetails200ApplicationJson, _super);
    function GetPhoneNumberDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignee" }),
        __metadata("design:type", GetPhoneNumberDetails200ApplicationJsonAssignee)
    ], GetPhoneNumberDetails200ApplicationJson.prototype, "assignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capability" }),
        __metadata("design:type", Array)
    ], GetPhoneNumberDetails200ApplicationJson.prototype, "capability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJson.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJson.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJson.prototype, "numberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", GetPhoneNumberDetails200ApplicationJsonSite)
    ], GetPhoneNumberDetails200ApplicationJson.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJson.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPhoneNumberDetails200ApplicationJson.prototype, "status", void 0);
    return GetPhoneNumberDetails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPhoneNumberDetails200ApplicationJson = GetPhoneNumberDetails200ApplicationJson;
var GetPhoneNumberDetailsRequest = /** @class */ (function (_super) {
    __extends(GetPhoneNumberDetailsRequest, _super);
    function GetPhoneNumberDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPhoneNumberDetailsPathParams)
    ], GetPhoneNumberDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPhoneNumberDetailsSecurity)
    ], GetPhoneNumberDetailsRequest.prototype, "security", void 0);
    return GetPhoneNumberDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.GetPhoneNumberDetailsRequest = GetPhoneNumberDetailsRequest;
var GetPhoneNumberDetailsResponse = /** @class */ (function (_super) {
    __extends(GetPhoneNumberDetailsResponse, _super);
    function GetPhoneNumberDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetPhoneNumberDetailsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPhoneNumberDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPhoneNumberDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPhoneNumberDetails200ApplicationJson)
    ], GetPhoneNumberDetailsResponse.prototype, "getPhoneNumberDetails200ApplicationJSONObject", void 0);
    return GetPhoneNumberDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.GetPhoneNumberDetailsResponse = GetPhoneNumberDetailsResponse;
