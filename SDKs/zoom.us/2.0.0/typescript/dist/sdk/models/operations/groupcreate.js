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
exports.GroupCreateResponse = exports.GroupCreateRequest = exports.GroupCreate201ApplicationJson = exports.GroupCreateSecurity = exports.GroupCreateRequests = exports.GroupCreateMultipartFormData = exports.GroupCreateApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GroupCreateApplicationJson = /** @class */ (function (_super) {
    __extends(GroupCreateApplicationJson, _super);
    function GroupCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupCreateApplicationJson.prototype, "name", void 0);
    return GroupCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GroupCreateApplicationJson = GroupCreateApplicationJson;
var GroupCreateMultipartFormData = /** @class */ (function (_super) {
    __extends(GroupCreateMultipartFormData, _super);
    function GroupCreateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], GroupCreateMultipartFormData.prototype, "name", void 0);
    return GroupCreateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.GroupCreateMultipartFormData = GroupCreateMultipartFormData;
var GroupCreateRequests = /** @class */ (function (_super) {
    __extends(GroupCreateRequests, _super);
    function GroupCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GroupCreateApplicationJson)
    ], GroupCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", GroupCreateMultipartFormData)
    ], GroupCreateRequests.prototype, "object1", void 0);
    return GroupCreateRequests;
}(utils_1.SpeakeasyBase));
exports.GroupCreateRequests = GroupCreateRequests;
var GroupCreateSecurity = /** @class */ (function (_super) {
    __extends(GroupCreateSecurity, _super);
    function GroupCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GroupCreateSecurity.prototype, "oAuth", void 0);
    return GroupCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.GroupCreateSecurity = GroupCreateSecurity;
var GroupCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(GroupCreate201ApplicationJson, _super);
    function GroupCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GroupCreate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupCreate201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_members" }),
        __metadata("design:type", Number)
    ], GroupCreate201ApplicationJson.prototype, "totalMembers", void 0);
    return GroupCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GroupCreate201ApplicationJson = GroupCreate201ApplicationJson;
var GroupCreateRequest = /** @class */ (function (_super) {
    __extends(GroupCreateRequest, _super);
    function GroupCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupCreateRequests)
    ], GroupCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupCreateSecurity)
    ], GroupCreateRequest.prototype, "security", void 0);
    return GroupCreateRequest;
}(utils_1.SpeakeasyBase));
exports.GroupCreateRequest = GroupCreateRequest;
var GroupCreateResponse = /** @class */ (function (_super) {
    __extends(GroupCreateResponse, _super);
    function GroupCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GroupCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GroupCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GroupCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GroupCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupCreate201ApplicationJson)
    ], GroupCreateResponse.prototype, "groupCreate201ApplicationJSONObject", void 0);
    return GroupCreateResponse;
}(utils_1.SpeakeasyBase));
exports.GroupCreateResponse = GroupCreateResponse;
