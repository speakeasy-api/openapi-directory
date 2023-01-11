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
exports.GetRoleInformationResponse = exports.GetRoleInformationRequest = exports.GetRoleInformation200ApplicationJson = exports.GetRoleInformation200ApplicationJsonSubAccountPrivileges = exports.GetRoleInformationSecurity = exports.GetRoleInformationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRoleInformationPathParams = /** @class */ (function (_super) {
    __extends(GetRoleInformationPathParams, _super);
    function GetRoleInformationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=roleId" }),
        __metadata("design:type", String)
    ], GetRoleInformationPathParams.prototype, "roleId", void 0);
    return GetRoleInformationPathParams;
}(utils_1.SpeakeasyBase));
exports.GetRoleInformationPathParams = GetRoleInformationPathParams;
var GetRoleInformationSecurity = /** @class */ (function (_super) {
    __extends(GetRoleInformationSecurity, _super);
    function GetRoleInformationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetRoleInformationSecurity.prototype, "oAuth", void 0);
    return GetRoleInformationSecurity;
}(utils_1.SpeakeasyBase));
exports.GetRoleInformationSecurity = GetRoleInformationSecurity;
// GetRoleInformation200ApplicationJsonSubAccountPrivileges
/**
 * This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
**/
var GetRoleInformation200ApplicationJsonSubAccountPrivileges = /** @class */ (function (_super) {
    __extends(GetRoleInformation200ApplicationJsonSubAccountPrivileges, _super);
    function GetRoleInformation200ApplicationJsonSubAccountPrivileges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=second_level" }),
        __metadata("design:type", Number)
    ], GetRoleInformation200ApplicationJsonSubAccountPrivileges.prototype, "secondLevel", void 0);
    return GetRoleInformation200ApplicationJsonSubAccountPrivileges;
}(utils_1.SpeakeasyBase));
exports.GetRoleInformation200ApplicationJsonSubAccountPrivileges = GetRoleInformation200ApplicationJsonSubAccountPrivileges;
var GetRoleInformation200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRoleInformation200ApplicationJson, _super);
    function GetRoleInformation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetRoleInformation200ApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetRoleInformation200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetRoleInformation200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privileges" }),
        __metadata("design:type", Array)
    ], GetRoleInformation200ApplicationJson.prototype, "privileges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sub_account_privileges" }),
        __metadata("design:type", GetRoleInformation200ApplicationJsonSubAccountPrivileges)
    ], GetRoleInformation200ApplicationJson.prototype, "subAccountPrivileges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_members" }),
        __metadata("design:type", Number)
    ], GetRoleInformation200ApplicationJson.prototype, "totalMembers", void 0);
    return GetRoleInformation200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetRoleInformation200ApplicationJson = GetRoleInformation200ApplicationJson;
var GetRoleInformationRequest = /** @class */ (function (_super) {
    __extends(GetRoleInformationRequest, _super);
    function GetRoleInformationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRoleInformationPathParams)
    ], GetRoleInformationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRoleInformationSecurity)
    ], GetRoleInformationRequest.prototype, "security", void 0);
    return GetRoleInformationRequest;
}(utils_1.SpeakeasyBase));
exports.GetRoleInformationRequest = GetRoleInformationRequest;
var GetRoleInformationResponse = /** @class */ (function (_super) {
    __extends(GetRoleInformationResponse, _super);
    function GetRoleInformationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetRoleInformationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRoleInformationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRoleInformationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRoleInformation200ApplicationJson)
    ], GetRoleInformationResponse.prototype, "getRoleInformation200ApplicationJSONObject", void 0);
    return GetRoleInformationResponse;
}(utils_1.SpeakeasyBase));
exports.GetRoleInformationResponse = GetRoleInformationResponse;
