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
exports.CreateChannelResponse = exports.CreateChannelRequest = exports.CreateChannel201ApplicationJson = exports.CreateChannelSecurity = exports.CreateChannelRequests = exports.CreateChannelMultipartFormData1 = exports.CreateChannelMultipartFormDataMembers = exports.CreateChannelApplicationJson = exports.CreateChannelApplicationJsonMembers = exports.CreateChannelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateChannelPathParams = /** @class */ (function (_super) {
    __extends(CreateChannelPathParams, _super);
    function CreateChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], CreateChannelPathParams.prototype, "userId", void 0);
    return CreateChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateChannelPathParams = CreateChannelPathParams;
var CreateChannelApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(CreateChannelApplicationJsonMembers, _super);
    function CreateChannelApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreateChannelApplicationJsonMembers.prototype, "email", void 0);
    return CreateChannelApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.CreateChannelApplicationJsonMembers = CreateChannelApplicationJsonMembers;
var CreateChannelApplicationJson = /** @class */ (function (_super) {
    __extends(CreateChannelApplicationJson, _super);
    function CreateChannelApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: CreateChannelApplicationJsonMembers }),
        __metadata("design:type", Array)
    ], CreateChannelApplicationJson.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateChannelApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], CreateChannelApplicationJson.prototype, "type", void 0);
    return CreateChannelApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateChannelApplicationJson = CreateChannelApplicationJson;
var CreateChannelMultipartFormDataMembers = /** @class */ (function (_super) {
    __extends(CreateChannelMultipartFormDataMembers, _super);
    function CreateChannelMultipartFormDataMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreateChannelMultipartFormDataMembers.prototype, "email", void 0);
    return CreateChannelMultipartFormDataMembers;
}(utils_1.SpeakeasyBase));
exports.CreateChannelMultipartFormDataMembers = CreateChannelMultipartFormDataMembers;
var CreateChannelMultipartFormData1 = /** @class */ (function (_super) {
    __extends(CreateChannelMultipartFormData1, _super);
    function CreateChannelMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=members;json=true", elemType: CreateChannelMultipartFormDataMembers }),
        __metadata("design:type", Array)
    ], CreateChannelMultipartFormData1.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], CreateChannelMultipartFormData1.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", Number)
    ], CreateChannelMultipartFormData1.prototype, "type", void 0);
    return CreateChannelMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.CreateChannelMultipartFormData1 = CreateChannelMultipartFormData1;
var CreateChannelRequests = /** @class */ (function (_super) {
    __extends(CreateChannelRequests, _super);
    function CreateChannelRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateChannelApplicationJson)
    ], CreateChannelRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreateChannelMultipartFormData1)
    ], CreateChannelRequests.prototype, "object1", void 0);
    return CreateChannelRequests;
}(utils_1.SpeakeasyBase));
exports.CreateChannelRequests = CreateChannelRequests;
var CreateChannelSecurity = /** @class */ (function (_super) {
    __extends(CreateChannelSecurity, _super);
    function CreateChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], CreateChannelSecurity.prototype, "oAuth", void 0);
    return CreateChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateChannelSecurity = CreateChannelSecurity;
var CreateChannel201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateChannel201ApplicationJson, _super);
    function CreateChannel201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateChannel201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jid" }),
        __metadata("design:type", String)
    ], CreateChannel201ApplicationJson.prototype, "jid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateChannel201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], CreateChannel201ApplicationJson.prototype, "type", void 0);
    return CreateChannel201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateChannel201ApplicationJson = CreateChannel201ApplicationJson;
var CreateChannelRequest = /** @class */ (function (_super) {
    __extends(CreateChannelRequest, _super);
    function CreateChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateChannelPathParams)
    ], CreateChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateChannelRequests)
    ], CreateChannelRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateChannelSecurity)
    ], CreateChannelRequest.prototype, "security", void 0);
    return CreateChannelRequest;
}(utils_1.SpeakeasyBase));
exports.CreateChannelRequest = CreateChannelRequest;
var CreateChannelResponse = /** @class */ (function (_super) {
    __extends(CreateChannelResponse, _super);
    function CreateChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreateChannelResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateChannel201ApplicationJson)
    ], CreateChannelResponse.prototype, "createChannel201ApplicationJSONObject", void 0);
    return CreateChannelResponse;
}(utils_1.SpeakeasyBase));
exports.CreateChannelResponse = CreateChannelResponse;
