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
exports.CreateRoleResponse = exports.CreateRoleRequest = exports.CreateRole201ApplicationJson = exports.CreateRoleSecurity = exports.CreateRoleRequests = exports.CreateRoleMultipartFormData = exports.CreateRoleApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateRoleApplicationJson = /** @class */ (function (_super) {
    __extends(CreateRoleApplicationJson, _super);
    function CreateRoleApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateRoleApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRoleApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privileges" }),
        __metadata("design:type", Array)
    ], CreateRoleApplicationJson.prototype, "privileges", void 0);
    return CreateRoleApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateRoleApplicationJson = CreateRoleApplicationJson;
var CreateRoleMultipartFormData = /** @class */ (function (_super) {
    __extends(CreateRoleMultipartFormData, _super);
    function CreateRoleMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], CreateRoleMultipartFormData.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], CreateRoleMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=privileges;json=true" }),
        __metadata("design:type", Array)
    ], CreateRoleMultipartFormData.prototype, "privileges", void 0);
    return CreateRoleMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.CreateRoleMultipartFormData = CreateRoleMultipartFormData;
var CreateRoleRequests = /** @class */ (function (_super) {
    __extends(CreateRoleRequests, _super);
    function CreateRoleRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRoleApplicationJson)
    ], CreateRoleRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreateRoleMultipartFormData)
    ], CreateRoleRequests.prototype, "object1", void 0);
    return CreateRoleRequests;
}(utils_1.SpeakeasyBase));
exports.CreateRoleRequests = CreateRoleRequests;
var CreateRoleSecurity = /** @class */ (function (_super) {
    __extends(CreateRoleSecurity, _super);
    function CreateRoleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], CreateRoleSecurity.prototype, "oAuth", void 0);
    return CreateRoleSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateRoleSecurity = CreateRoleSecurity;
var CreateRole201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateRole201ApplicationJson, _super);
    function CreateRole201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateRole201ApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateRole201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRole201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privileges" }),
        __metadata("design:type", Array)
    ], CreateRole201ApplicationJson.prototype, "privileges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_members" }),
        __metadata("design:type", Number)
    ], CreateRole201ApplicationJson.prototype, "totalMembers", void 0);
    return CreateRole201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateRole201ApplicationJson = CreateRole201ApplicationJson;
var CreateRoleRequest = /** @class */ (function (_super) {
    __extends(CreateRoleRequest, _super);
    function CreateRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateRoleRequests)
    ], CreateRoleRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateRoleSecurity)
    ], CreateRoleRequest.prototype, "security", void 0);
    return CreateRoleRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRoleRequest = CreateRoleRequest;
var CreateRoleResponse = /** @class */ (function (_super) {
    __extends(CreateRoleResponse, _super);
    function CreateRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreateRoleResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateRoleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateRoleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRoleResponse.prototype, "createRole200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateRole201ApplicationJson)
    ], CreateRoleResponse.prototype, "createRole201ApplicationJSONObject", void 0);
    return CreateRoleResponse;
}(utils_1.SpeakeasyBase));
exports.CreateRoleResponse = CreateRoleResponse;
