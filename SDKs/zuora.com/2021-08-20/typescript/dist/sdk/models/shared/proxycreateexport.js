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
exports.ProxyCreateExport = exports.ProxyCreateExportFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ProxyCreateExportFormatEnum;
(function (ProxyCreateExportFormatEnum) {
    ProxyCreateExportFormatEnum["Csv"] = "csv";
    ProxyCreateExportFormatEnum["Html"] = "html";
    ProxyCreateExportFormatEnum["Excel"] = "Excel";
})(ProxyCreateExportFormatEnum = exports.ProxyCreateExportFormatEnum || (exports.ProxyCreateExportFormatEnum = {}));
var ProxyCreateExport = /** @class */ (function (_super) {
    __extends(ProxyCreateExport, _super);
    function ProxyCreateExport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConvertToCurrencies" }),
        __metadata("design:type", String)
    ], ProxyCreateExport.prototype, "convertToCurrencies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Encrypted" }),
        __metadata("design:type", Boolean)
    ], ProxyCreateExport.prototype, "encrypted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FileId" }),
        __metadata("design:type", String)
    ], ProxyCreateExport.prototype, "fileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Format" }),
        __metadata("design:type", String)
    ], ProxyCreateExport.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ProxyCreateExport.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Query" }),
        __metadata("design:type", String)
    ], ProxyCreateExport.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Size" }),
        __metadata("design:type", Number)
    ], ProxyCreateExport.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProxyCreateExport.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StatusReason" }),
        __metadata("design:type", String)
    ], ProxyCreateExport.prototype, "statusReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Zip" }),
        __metadata("design:type", Boolean)
    ], ProxyCreateExport.prototype, "zip", void 0);
    return ProxyCreateExport;
}(utils_1.SpeakeasyBase));
exports.ProxyCreateExport = ProxyCreateExport;
