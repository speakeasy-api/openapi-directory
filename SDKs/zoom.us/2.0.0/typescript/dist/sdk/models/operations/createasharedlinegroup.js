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
exports.CreateASharedLineGroupResponse = exports.CreateASharedLineGroupRequest = exports.CreateASharedLineGroupSecurity = exports.CreateASharedLineGroupRequests = exports.CreateASharedLineGroupMultipartFormData = exports.CreateASharedLineGroupApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateASharedLineGroupApplicationJson = /** @class */ (function (_super) {
    __extends(CreateASharedLineGroupApplicationJson, _super);
    function CreateASharedLineGroupApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateASharedLineGroupApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], CreateASharedLineGroupApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], CreateASharedLineGroupApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], CreateASharedLineGroupApplicationJson.prototype, "siteId", void 0);
    return CreateASharedLineGroupApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateASharedLineGroupApplicationJson = CreateASharedLineGroupApplicationJson;
var CreateASharedLineGroupMultipartFormData = /** @class */ (function (_super) {
    __extends(CreateASharedLineGroupMultipartFormData, _super);
    function CreateASharedLineGroupMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], CreateASharedLineGroupMultipartFormData.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=display_name" }),
        __metadata("design:type", String)
    ], CreateASharedLineGroupMultipartFormData.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=extension_number" }),
        __metadata("design:type", Number)
    ], CreateASharedLineGroupMultipartFormData.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=site_id" }),
        __metadata("design:type", String)
    ], CreateASharedLineGroupMultipartFormData.prototype, "siteId", void 0);
    return CreateASharedLineGroupMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.CreateASharedLineGroupMultipartFormData = CreateASharedLineGroupMultipartFormData;
var CreateASharedLineGroupRequests = /** @class */ (function (_super) {
    __extends(CreateASharedLineGroupRequests, _super);
    function CreateASharedLineGroupRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateASharedLineGroupApplicationJson)
    ], CreateASharedLineGroupRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreateASharedLineGroupMultipartFormData)
    ], CreateASharedLineGroupRequests.prototype, "object1", void 0);
    return CreateASharedLineGroupRequests;
}(utils_1.SpeakeasyBase));
exports.CreateASharedLineGroupRequests = CreateASharedLineGroupRequests;
var CreateASharedLineGroupSecurity = /** @class */ (function (_super) {
    __extends(CreateASharedLineGroupSecurity, _super);
    function CreateASharedLineGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], CreateASharedLineGroupSecurity.prototype, "oAuth", void 0);
    return CreateASharedLineGroupSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateASharedLineGroupSecurity = CreateASharedLineGroupSecurity;
var CreateASharedLineGroupRequest = /** @class */ (function (_super) {
    __extends(CreateASharedLineGroupRequest, _super);
    function CreateASharedLineGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateASharedLineGroupRequests)
    ], CreateASharedLineGroupRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateASharedLineGroupSecurity)
    ], CreateASharedLineGroupRequest.prototype, "security", void 0);
    return CreateASharedLineGroupRequest;
}(utils_1.SpeakeasyBase));
exports.CreateASharedLineGroupRequest = CreateASharedLineGroupRequest;
var CreateASharedLineGroupResponse = /** @class */ (function (_super) {
    __extends(CreateASharedLineGroupResponse, _super);
    function CreateASharedLineGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreateASharedLineGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateASharedLineGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateASharedLineGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateASharedLineGroupResponse.prototype, "createASharedLineGroup200ApplicationJSONAny", void 0);
    return CreateASharedLineGroupResponse;
}(utils_1.SpeakeasyBase));
exports.CreateASharedLineGroupResponse = CreateASharedLineGroupResponse;
