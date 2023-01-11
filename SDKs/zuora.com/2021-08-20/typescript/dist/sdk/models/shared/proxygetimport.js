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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyGetImport = void 0;
var utils_1 = require("../../../internal/utils");
var ProxyGetImport = /** @class */ (function (_super) {
    __extends(ProxyGetImport, _super);
    function ProxyGetImport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], ProxyGetImport.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], ProxyGetImport.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ProxyGetImport.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ImportType" }),
        __metadata("design:type", String)
    ], ProxyGetImport.prototype, "importType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ImportedCount" }),
        __metadata("design:type", Number)
    ], ProxyGetImport.prototype, "importedCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Md5" }),
        __metadata("design:type", String)
    ], ProxyGetImport.prototype, "md5", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ProxyGetImport.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OriginalResourceUrl" }),
        __metadata("design:type", String)
    ], ProxyGetImport.prototype, "originalResourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResultResourceUrl" }),
        __metadata("design:type", String)
    ], ProxyGetImport.prototype, "resultResourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProxyGetImport.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StatusReason" }),
        __metadata("design:type", String)
    ], ProxyGetImport.prototype, "statusReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalCount" }),
        __metadata("design:type", Number)
    ], ProxyGetImport.prototype, "totalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], ProxyGetImport.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], ProxyGetImport.prototype, "updatedDate", void 0);
    return ProxyGetImport;
}(utils_1.SpeakeasyBase));
exports.ProxyGetImport = ProxyGetImport;
