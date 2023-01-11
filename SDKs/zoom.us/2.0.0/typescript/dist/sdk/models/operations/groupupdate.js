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
exports.GroupUpdateResponse = exports.GroupUpdateRequest = exports.GroupUpdateSecurity = exports.GroupUpdateRequests = exports.GroupUpdateMultipartFormData = exports.GroupUpdateApplicationJson = exports.GroupUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GroupUpdatePathParams = /** @class */ (function (_super) {
    __extends(GroupUpdatePathParams, _super);
    function GroupUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], GroupUpdatePathParams.prototype, "groupId", void 0);
    return GroupUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.GroupUpdatePathParams = GroupUpdatePathParams;
var GroupUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(GroupUpdateApplicationJson, _super);
    function GroupUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupUpdateApplicationJson.prototype, "name", void 0);
    return GroupUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GroupUpdateApplicationJson = GroupUpdateApplicationJson;
var GroupUpdateMultipartFormData = /** @class */ (function (_super) {
    __extends(GroupUpdateMultipartFormData, _super);
    function GroupUpdateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], GroupUpdateMultipartFormData.prototype, "name", void 0);
    return GroupUpdateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.GroupUpdateMultipartFormData = GroupUpdateMultipartFormData;
var GroupUpdateRequests = /** @class */ (function (_super) {
    __extends(GroupUpdateRequests, _super);
    function GroupUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GroupUpdateApplicationJson)
    ], GroupUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", GroupUpdateMultipartFormData)
    ], GroupUpdateRequests.prototype, "object1", void 0);
    return GroupUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.GroupUpdateRequests = GroupUpdateRequests;
var GroupUpdateSecurity = /** @class */ (function (_super) {
    __extends(GroupUpdateSecurity, _super);
    function GroupUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GroupUpdateSecurity.prototype, "oAuth", void 0);
    return GroupUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.GroupUpdateSecurity = GroupUpdateSecurity;
var GroupUpdateRequest = /** @class */ (function (_super) {
    __extends(GroupUpdateRequest, _super);
    function GroupUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupUpdatePathParams)
    ], GroupUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupUpdateRequests)
    ], GroupUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupUpdateSecurity)
    ], GroupUpdateRequest.prototype, "security", void 0);
    return GroupUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.GroupUpdateRequest = GroupUpdateRequest;
var GroupUpdateResponse = /** @class */ (function (_super) {
    __extends(GroupUpdateResponse, _super);
    function GroupUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GroupUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GroupUpdateResponse.prototype, "statusCode", void 0);
    return GroupUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.GroupUpdateResponse = GroupUpdateResponse;
