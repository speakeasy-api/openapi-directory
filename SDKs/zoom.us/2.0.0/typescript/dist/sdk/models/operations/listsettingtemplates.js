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
exports.ListSettingTemplatesResponse = exports.ListSettingTemplatesRequest = exports.ListSettingTemplates200ApplicationJson = exports.ListSettingTemplates200ApplicationJsonTemplates = exports.ListSettingTemplates200ApplicationJsonTemplatesTypeEnum = exports.ListSettingTemplatesSecurity = exports.ListSettingTemplatesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListSettingTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(ListSettingTemplatesQueryParams, _super);
    function ListSettingTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListSettingTemplatesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListSettingTemplatesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], ListSettingTemplatesQueryParams.prototype, "siteId", void 0);
    return ListSettingTemplatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSettingTemplatesQueryParams = ListSettingTemplatesQueryParams;
var ListSettingTemplatesSecurity = /** @class */ (function (_super) {
    __extends(ListSettingTemplatesSecurity, _super);
    function ListSettingTemplatesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListSettingTemplatesSecurity.prototype, "oAuth", void 0);
    return ListSettingTemplatesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSettingTemplatesSecurity = ListSettingTemplatesSecurity;
var ListSettingTemplates200ApplicationJsonTemplatesTypeEnum;
(function (ListSettingTemplates200ApplicationJsonTemplatesTypeEnum) {
    ListSettingTemplates200ApplicationJsonTemplatesTypeEnum["User"] = "user";
    ListSettingTemplates200ApplicationJsonTemplatesTypeEnum["Group"] = "group";
    ListSettingTemplates200ApplicationJsonTemplatesTypeEnum["AutReceptionist"] = "autReceptionist";
    ListSettingTemplates200ApplicationJsonTemplatesTypeEnum["CommonArea"] = "commonArea";
    ListSettingTemplates200ApplicationJsonTemplatesTypeEnum["Zr"] = "zr";
    ListSettingTemplates200ApplicationJsonTemplatesTypeEnum["Interop"] = "interop";
})(ListSettingTemplates200ApplicationJsonTemplatesTypeEnum = exports.ListSettingTemplates200ApplicationJsonTemplatesTypeEnum || (exports.ListSettingTemplates200ApplicationJsonTemplatesTypeEnum = {}));
var ListSettingTemplates200ApplicationJsonTemplates = /** @class */ (function (_super) {
    __extends(ListSettingTemplates200ApplicationJsonTemplates, _super);
    function ListSettingTemplates200ApplicationJsonTemplates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ListSettingTemplates200ApplicationJsonTemplates.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSettingTemplates200ApplicationJsonTemplates.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListSettingTemplates200ApplicationJsonTemplates.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListSettingTemplates200ApplicationJsonTemplates.prototype, "type", void 0);
    return ListSettingTemplates200ApplicationJsonTemplates;
}(utils_1.SpeakeasyBase));
exports.ListSettingTemplates200ApplicationJsonTemplates = ListSettingTemplates200ApplicationJsonTemplates;
var ListSettingTemplates200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSettingTemplates200ApplicationJson, _super);
    function ListSettingTemplates200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListSettingTemplates200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSettingTemplates200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=templates", elemType: ListSettingTemplates200ApplicationJsonTemplates }),
        __metadata("design:type", Array)
    ], ListSettingTemplates200ApplicationJson.prototype, "templates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListSettingTemplates200ApplicationJson.prototype, "totalRecords", void 0);
    return ListSettingTemplates200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSettingTemplates200ApplicationJson = ListSettingTemplates200ApplicationJson;
var ListSettingTemplatesRequest = /** @class */ (function (_super) {
    __extends(ListSettingTemplatesRequest, _super);
    function ListSettingTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSettingTemplatesQueryParams)
    ], ListSettingTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSettingTemplatesSecurity)
    ], ListSettingTemplatesRequest.prototype, "security", void 0);
    return ListSettingTemplatesRequest;
}(utils_1.SpeakeasyBase));
exports.ListSettingTemplatesRequest = ListSettingTemplatesRequest;
var ListSettingTemplatesResponse = /** @class */ (function (_super) {
    __extends(ListSettingTemplatesResponse, _super);
    function ListSettingTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListSettingTemplatesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSettingTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSettingTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSettingTemplates200ApplicationJson)
    ], ListSettingTemplatesResponse.prototype, "listSettingTemplates200ApplicationJSONObject", void 0);
    return ListSettingTemplatesResponse;
}(utils_1.SpeakeasyBase));
exports.ListSettingTemplatesResponse = ListSettingTemplatesResponse;
