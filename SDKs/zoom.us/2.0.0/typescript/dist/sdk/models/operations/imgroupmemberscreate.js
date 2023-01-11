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
exports.ImGroupMembersCreateResponse = exports.ImGroupMembersCreateRequest = exports.ImGroupMembersCreateSecurity = exports.ImGroupMembersCreateRequests = exports.ImGroupMembersCreateMultipartFormData1 = exports.ImGroupMembersCreateMultipartFormDataMembers = exports.ImGroupMembersCreateApplicationJson = exports.ImGroupMembersCreateApplicationJsonMembers = exports.ImGroupMembersCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ImGroupMembersCreatePathParams = /** @class */ (function (_super) {
    __extends(ImGroupMembersCreatePathParams, _super);
    function ImGroupMembersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], ImGroupMembersCreatePathParams.prototype, "groupId", void 0);
    return ImGroupMembersCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersCreatePathParams = ImGroupMembersCreatePathParams;
var ImGroupMembersCreateApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(ImGroupMembersCreateApplicationJsonMembers, _super);
    function ImGroupMembersCreateApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ImGroupMembersCreateApplicationJsonMembers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImGroupMembersCreateApplicationJsonMembers.prototype, "id", void 0);
    return ImGroupMembersCreateApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersCreateApplicationJsonMembers = ImGroupMembersCreateApplicationJsonMembers;
var ImGroupMembersCreateApplicationJson = /** @class */ (function (_super) {
    __extends(ImGroupMembersCreateApplicationJson, _super);
    function ImGroupMembersCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: ImGroupMembersCreateApplicationJsonMembers }),
        __metadata("design:type", Array)
    ], ImGroupMembersCreateApplicationJson.prototype, "members", void 0);
    return ImGroupMembersCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersCreateApplicationJson = ImGroupMembersCreateApplicationJson;
var ImGroupMembersCreateMultipartFormDataMembers = /** @class */ (function (_super) {
    __extends(ImGroupMembersCreateMultipartFormDataMembers, _super);
    function ImGroupMembersCreateMultipartFormDataMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ImGroupMembersCreateMultipartFormDataMembers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImGroupMembersCreateMultipartFormDataMembers.prototype, "id", void 0);
    return ImGroupMembersCreateMultipartFormDataMembers;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersCreateMultipartFormDataMembers = ImGroupMembersCreateMultipartFormDataMembers;
var ImGroupMembersCreateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(ImGroupMembersCreateMultipartFormData1, _super);
    function ImGroupMembersCreateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=members;json=true", elemType: ImGroupMembersCreateMultipartFormDataMembers }),
        __metadata("design:type", Array)
    ], ImGroupMembersCreateMultipartFormData1.prototype, "members", void 0);
    return ImGroupMembersCreateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersCreateMultipartFormData1 = ImGroupMembersCreateMultipartFormData1;
var ImGroupMembersCreateRequests = /** @class */ (function (_super) {
    __extends(ImGroupMembersCreateRequests, _super);
    function ImGroupMembersCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImGroupMembersCreateApplicationJson)
    ], ImGroupMembersCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ImGroupMembersCreateMultipartFormData1)
    ], ImGroupMembersCreateRequests.prototype, "object1", void 0);
    return ImGroupMembersCreateRequests;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersCreateRequests = ImGroupMembersCreateRequests;
var ImGroupMembersCreateSecurity = /** @class */ (function (_super) {
    __extends(ImGroupMembersCreateSecurity, _super);
    function ImGroupMembersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ImGroupMembersCreateSecurity.prototype, "oAuth", void 0);
    return ImGroupMembersCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersCreateSecurity = ImGroupMembersCreateSecurity;
var ImGroupMembersCreateRequest = /** @class */ (function (_super) {
    __extends(ImGroupMembersCreateRequest, _super);
    function ImGroupMembersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupMembersCreatePathParams)
    ], ImGroupMembersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupMembersCreateRequests)
    ], ImGroupMembersCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupMembersCreateSecurity)
    ], ImGroupMembersCreateRequest.prototype, "security", void 0);
    return ImGroupMembersCreateRequest;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersCreateRequest = ImGroupMembersCreateRequest;
var ImGroupMembersCreateResponse = /** @class */ (function (_super) {
    __extends(ImGroupMembersCreateResponse, _super);
    function ImGroupMembersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ImGroupMembersCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImGroupMembersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImGroupMembersCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImGroupMembersCreateResponse.prototype, "imGroupMembersCreate201ApplicationJSONAny", void 0);
    return ImGroupMembersCreateResponse;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersCreateResponse = ImGroupMembersCreateResponse;
