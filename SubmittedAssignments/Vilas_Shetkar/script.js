class InvoiceComponent extends HTMLElement {
  constructor() {
    super();
    this.config = this.defaultConfig();
    this.data = this.defaultData();
    this.render();
  }

  static get observedAttributes() {
    return ["config", "data"];
  }

  connectedCallback() {
    this.addEventListener("submit", (event) => {
      Object.assign(this.data, event.detail);
      this.render();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      try {
        if (name === "config" && newValue) {
          Object.assign(this.config, JSON.parse(newValue));
        }
        if (name === "data" && newValue) {
          Object.assign(this.data, JSON.parse(newValue));
        }
      } catch (e) {
        console.error(`Invalid ${name} JSON:`, e);
      }
      this.render();
    }
  }

  defaultConfig() {
    return {
      backgroundDiv: "invoice-wrapper",
      backgroundClass: "invoice-background",
      buttonClass: "btn btn-primary",
      rec1Class: "rect-top-1",
      rec2Class: "rect-top-2",
      rec3Class: "rect-top-3",
      rec4Class: "rect-bottom-1",
      rec5Class: "rect-bottom-2",
      rec6Class: "rect-bottom-3",
      lineClass: "line1",
      contentClass: "invoice-content",
      titleClass: "invoice-title",
      headerClass: "invoice-header",
      logoClass: "invoice-header-logo",
      qrClass: "qr",
      detailsClass: "invoice-details",
      addressClass: "org-address",
      detailsHeaderClass: "details-header",
      tableClass: "content-table",
      tableHeaderClass: "content-header",
      rightAlignClass: "right-align",
      totalClass: "total-amount",
      bankDetailsClass: "bank-details",
      termsClass: "terms primary",
      footerClass: "invoice-footer",
    };
  }

  defaultData() {
    // You can move your large data object here for brevity
    return {

      "uid": "IN00000618",
      "category": "Sale",
      "type": "Sale",
      "remark": "Invoice against Order #OR00000709",
      "config": {
        "storageLocationId": "64097cc4462d5422fccd8e84"
      },
      "subTotal": 100,
      "discount": 64,
      "couponDiscount": 0,
      "discountedSubTotal": 100,
      "taxTotal": 0,
      "mrpTotal": 164,
      "previousDue": 0,
      "amount": 100,
      "roundOff": 0,
      "subTotalAmount": 100,
      "shippingCharges": 30,
      "shippingDiscount": 30,
      "paymentStatus": "Unpaid",
      "deliveryStatus": "ReturnProcessing",
      "invoiceDate": "2023-06-23T00:00:00.000Z",
      "dueDate": "2023-06-13T11:33:24.335Z",
      "created": "2023-06-23T12:07:09.564Z",
      "modified": "2023-06-23T12:52:07.296Z",

      "Party": {
        "uid": "LDU7WXCR",
        "puid": "User",
        "name": "Ashvini Shetkar",
        "firstName": "Ashvini",
        "lastName": "Shetkar",
        "mobile": "+917517978898",
        "email": "vilasshetkar@gmail.com",
        "billingAddress": {
          "line1": "Hariom plaza",
          "line2": "Kalewadi",
          "location": "Pune H.O",
          "area": "Pune City",
          "city": "Pune",
          "state": "MAHARASHTRA",
          "country": "india",
          "pincode": "411001"
        },
        "shippingAddress": {
          "line1": "Hariom plaza",
          "line2": "Kalewadi",
          "location": "Pune H.O",
          "area": "Pune City",
          "city": "Pune",
          "state": "MAHARASHTRA",
          "country": "india",
          "pincode": "411001"
        },
        "address": {
          "line1": "Shop No. 8, Hari Om Plaza, Pune",
          "line2": "Kalewadi-Pimpri Main Road, Nadhe Nagar, Kalewadi",
          "line3": "Opp. Joytiba Temple",
          "location": "Kalewadi ",
          "area": "Pune City",
          "city": "Pune",
          "state": "MAHARASHTRA",
          "country": "India",
          "pincode": "411017",
          "zoom": 14,
          "accuracy": 17.778,
          "latLng": {
            "lat": 18.61799689999999,
            "lng": 73.7917382
          }
        },
        "bankDetails": {
          "accountNumber": "123456",
          "ifscCode": ""
        },
        "dob": "1990-02-02T00:00:00.000Z",
        "gender": "male",
        "joiningDate": "2023-03-14T00:00:00.000Z",
        "maritalStatus": "Married",
        "middleName": "ABCD",
        "pan": "DDDFG8765F",
        "userId": "63e243e0b8c48b22c885b4b9",
        "profilePicture": "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
        "InvoiceSalesSummary": {
          "mrpTotal": 2845514,
          "roundOff": 0.01999999999999999,
          "discountedSubTotal": 1702586.98,
          "invoices": 81,
          "subTotal": 1634226.98,
          "discount": 1142927.02,
          "taxTotal": 0,
          "previousDue": 0,
          "amount": 1702747,
          "subTotalAmount": 1702586.98
        },
        "TransactionSummary": {
          "totalCreditAmount": 1781333,
          "totalDebitAmount": 10720,
          "transactions": 115,
          "totalCredit": 115,
          "totalDebit": 115
        },
        "ReferralSummary": {
          "totalCount": 17,
          "transactions": 5,
          "totalCreditAmount": 173984,
          "totalDebitAmount": 0,
          "noTransactions": 12
        }
      },
      "particulars": [
        {
          "_id": "6495957729bd8844641bf4bf",
          "category": "Sale",
          "type": "Sale",
          "quantity": -1,
          "sgst": 0,
          "cgst": 0,
          "inBoxQuantity": -12,
          "boxQuantity": -1,
          "mrp": 164,
          "purchaseRate": 116.19,
          "saleRate": 100,
          "retailRate": 126.19,
          "subTotal": 100,
          "discount": 64,
          "discountedSubTotal": 100,
          "taxTotal": 0,
          "amount": 100,
          "mrpTotal": 164,
          "stockDate": "2023-06-23T00:00:00.000Z",
          "config": {},
          "Product": {
            "uid": "PR5045",
            "name": "Gemini Sunflower Oil",
            "shortName": "Gemini Sunflower Oil",
            "type": "Product",
            "tax": 0,
            "isTaxIncluded": true,
            "image": "/api/download/63e243e0b8c48b22c885b4b9/Cooking Oil/Gemini Sunflower Oil_1_liter.jpg",
            "description": "<p>Gemini Sunflower Oil</p>",
            "unit": "PCS",
            "boxQuantity": 1,
            "purchaseRate": 116.19,
            "retailRate": 126.19,
            "mrp": 164,
            "retailMarginType": "Amount",
            "retailMargin": 10,
            "crate": false,
            "showInStore": true,
            "isStockRequired": true,
            "category": "Grocery",
            "additionalCategories": [],
            "subCategory": "CookingOil",
            "addToStock": false,
            "startDate": "2023-05-19T00:00:00.000Z",
            "expiryDate": "2023-05-19T00:00:00.000Z",
            "created": "2023-05-19T08:28:46.455Z",
            "modified": "2023-05-29T06:51:36.385Z",
            "additionalFields": {},
            "variantOptions": [],
            "wholesaleMarginType": "Percentage",
            "inBoxName": "Box",
            "inBoxQuantity": 12,
            "AvailableStock": {
              "purchaseQuantity": 12,
              "soldQuantity": -6,
              "totalPrchaseAmount": 697.14,
              "stockIn": 0,
              "totalSaleAmount": 0,
              "totalMrpAmount": 0,
              "stockOut": 0,
              "quantity": 6
            },
            "Discount": [],
            "Variants": [],
            "retailDiscount": 37.81,
            "retailDiscountPercentage": 23.05,
            "wholesaleDiscount": null,
            "wholesaleDiscountPercentage": null
          },
          "StorageLocation": {
            "category": "Godown",
            "name": "kalewadi",
            "address": "fwehfwe",
            "building": "hari om plaza",
            "wing": "A",
            "floor": "5",
            "chamber": "first",
            "rack": "first",
            "location": "kalewadi",
            "width": 100,
            "length": 100,
            "height": 50
          }
        }
      ],
      "Company": {
        "name": "Apnasite",
        "bankDetails": {
          "accountNumber": "1234567890",
          "bankName": "HDFC",
          "branch": "Pune",
          "accountHolderName": "Apnasite",
          "ifscCode": "HDFC0000234",
          "vpa": "apnasite@ybl"
        },
        "contactDetails": {
          "email": "kaapnasiteuser@gmail.com",
          "mobile": "+917517978898",
          "whatsappNumber": "+919049508514",
          "phone": "",
          "website": "http://apnasite.in",
          "tollFreeNo": "",
          "socialLinks": [
            {
              "name": "Facebook",
              "label": "Facebook",
              "url": "https://facebook.com/apnasite",
              "className": "btn btn-link",
              "icon": "bi bi-facebook",
              "type": "Link"
            }
          ]
        },
        "gst": "",
        "logo": "https://services.apnasite.in/invoice-assignments/Vilas_Shetkar/img/logo.png",
        "address": {
          "line1": "Hariom plaza",
          "line2": "Kalewadi",
          "location": "Pune H.O",
          "area": "Pune City",
          "city": "Pune",
          "state": "MAHARASHTRA",
          "country": "india",
          "pincode": "411001"
        },
        "darkLogo": "https://services.apnasite.in/invoice-assignments/Vilas_Shetkar/img/logo.png"
      },
      "balance": null
    };
  }

  render() {
    this.innerHTML = "";

    const wrapper = this.createElement("div", this.config.backgroundDiv);
    wrapper.appendChild(this.renderBackground());
    const content = this.createElement("div", this.config.contentClass);

    content.appendChild(this.renderTitle());
    content.appendChild(this.renderHeader());
    content.appendChild(this.renderCustomerDetails());
    content.appendChild(this.renderItemsTable());
    content.appendChild(this.renderTotal());
    content.appendChild(this.renderBankDetails());
    content.appendChild(this.renderTerms());
    content.appendChild(this.renderFooter());

    wrapper.appendChild(content);
    this.appendChild(wrapper);
  }

  renderBackground() {
    const bg = this.createElement("div", this.config.backgroundClass);
    [this.config.rec1Class, this.config.rec2Class, this.config.rec3Class,
    this.config.rec4Class, this.config.rec5Class, this.config.rec6Class]
      .forEach(cls => bg.appendChild(this.createElement("div", cls)));
    return bg;
  }

  renderTitle() {
    return this.createElement("h1", this.config.titleClass, this.data.title || "Invoice");
  }

  renderHeader() {
    const header = this.createElement("div", this.config.headerClass);
    header.appendChild(this.renderLogo());
    header.appendChild(this.renderQR());
    header.appendChild(this.renderInvoiceDetails());
    header.appendChild(this.renderCompanyDetails());
    return header;
  }

  renderLogo() {
    const logo = this.createElement("img", this.config.logoClass);
    logo.src = this.data.logo || "https://services.apnasite.in/invoice-assignments/Vilas_Shetkar/img/logo.png";
    logo.alt = "Logo";
    return logo;
  }

  renderQR() {
    const qr = this.createElement("img", this.config.qrClass);
    qr.src = this.data.qr || "https://services.apnasite.in/invoice-assignments/Vilas_Shetkar/img/qr.png";
    qr.alt = "QR";
    return qr;
  }

  renderInvoiceDetails() {
    const d = this.data;
    const details = this.createElement("div", this.config.detailsClass);
    details.appendChild(this.createElement("div", "invoice-no", `Invoice #: ${d.invoiceNumber || ""}`));
    details.appendChild(this.createElement("div", "invoice-date", `Invoice Date: ${d.invoiceDate || ""}`));
    details.appendChild(this.createElement("div", "invoice-due-date", `Due Date: ${d.dueDate || ""}`));
    details.appendChild(this.createElement("div", "invoice-po-number", `PO Number: ${d.poNumber || ""}`));
    return details;
  }

  renderCompanyDetails() {
    const d = this.data;
    const div = this.createElement("div", "invoice-company-details");
    div.appendChild(this.createElement("div", "org-name", d.Company.name || ""));
    div.appendChild(this.createElement("div", "org-gst-no", d.Company.gst || ""));
    const addr = this.createElement("div", this.config.addressClass);
    (Object.values(d.Company.address) || []).filter(line => line !== '').forEach(line => addr.appendChild(this.createElement("div", null, line)));
    div.appendChild(addr);
    return div;
  }

  renderCustomerDetails() {
    const d = this.data;
    const section = this.createElement("div", "customer-details-section flex-row gap-16");

    // Billing Address Block
    const billingBlock = this.createElement("span", "customer-address-block flex-1");
    billingBlock.appendChild(this.renderAddressSection("Billing Address", d.Party?.billingAddress, d.Party?.name));
    section.appendChild(billingBlock);

    // Shipping Address Block
    const shippingBlock = this.createElement("span", "customer-address-block flex-1");
    shippingBlock.appendChild(this.renderAddressSection("Shipping Address", d.Party?.shippingAddress, d.Party?.name));
    section.appendChild(shippingBlock);

    return section;
  }

  renderAddressSection(title, addressObj, partyName) {
    const section = this.createElement("div", title.toLowerCase().replace(/\s/g, "-") + "-section");
    section.appendChild(this.createElement("div", this.config.detailsHeaderClass, title));
    const addrDiv = this.createElement("div", "details-cell party-address");
    if (partyName) addrDiv.appendChild(this.createElement("div", "party-name", partyName));
    if (addressObj && typeof addressObj === "object") {
      Object.values(addressObj).forEach(line => {
        if (line) addrDiv.appendChild(this.createElement("span", null, line));
      });
    }
    section.appendChild(addrDiv);
    return section;
  }

  renderItemsTable() {
    const itemsDiv = this.createElement("div", "items");
    const table = this.createElement("table", this.config.tableClass);
    const items = this.data.particulars || [];
    if (!items.length) {
      table.appendChild(this.createElement("caption", null, "No items"));
      itemsDiv.appendChild(table);
      return itemsDiv;
    }
    const allKeys = Array.from(new Set(items.flatMap(item => Object.keys(item))));
    const thead = this.createElement("thead");
    const headerRow = this.createElement("tr");
    allKeys.forEach(key => headerRow.appendChild(this.createTableHeaderCell(key)));
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = this.createElement("tbody");
    items.forEach(item => {
      const row = this.createElement("tr");
      allKeys.forEach(key => row.appendChild(this.createTableCell(item[key])));
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    itemsDiv.appendChild(table);
    return itemsDiv;
  }

  renderTotal() {
    return this.createElement("div", this.config.totalClass, `Total Amount in Words: ${this.data.totalAmountInWords || ""}`);
  }

  renderBankDetails() {
    const d = this.data.bankDetails || {};
    const div = this.createElement("div", this.config.bankDetailsClass);
    div.appendChild(this.createElement("div", null, `Bank: ${d.bank || ""}`));
    div.appendChild(this.createElement("div", null, `Account: ${d.account || ""}`));
    div.appendChild(this.createElement("div", null, `IFSC: ${d.ifsc || ""}`));
    div.appendChild(this.createElement("div", null, `Branch: ${d.branch || ""}`));
    return div;
  }

  renderTerms() {
    const div = this.createElement("div", this.config.termsClass);
    div.appendChild(this.createElement("div", this.config.detailsHeaderClass, "Terms:"));
    (this.data.terms || []).forEach(term => div.appendChild(this.createElement("div", null, term)));
    return div;
  }

  renderFooter() {
    const div = this.createElement("div", this.config.footerClass);
    div.appendChild(this.createElement("div", null, "Authorized Signature"));
    div.appendChild(this.createElement("div", null, `Date: ${this.data.invoiceDate || ""}`));
    return div;
  }

  createElement(tag, className, textContent) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (textContent !== undefined) el.textContent = textContent;
    return el;
  }

  createTableHeaderCell(text) {
    return this.createElement("th", null, text.charAt(0).toUpperCase() + text.slice(1));
  }

  createTableCell(text) {
    return this.createElement("td", null, text == null ? "" : String(text));
  }

}

class InvoiceFormComponent extends HTMLElement {
  static get observedAttributes() {
    return ["config", "data"];
  }

  constructor() {
    super();
    this.config = this.defaultConfig();
    this.data = this.defaultData();
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      try {
        if (name === "config" && newValue) {
          Object.assign(this.config, JSON.parse(newValue));
        }
        if (name === "data" && newValue) {
          Object.assign(this.data, JSON.parse(newValue));
        }
      } catch (e) {
        console.error(`Invalid ${name} JSON:`, e);
      }
      this.render();
    }
  }

  defaultConfig() {
    return {
      formClass: "invoice-form container",
      formLabelClass: "form-label",
      formControlClass: "form-control",
      formRowClass: "form-row",
      formButtonClass: "btn btn-primary",
      particularsTableClass: "particulars-table table table-striped table-sm table-bordered",
      particularsAddBtnClass: "btn btn-secondary btn-sm",
      particularsRemoveBtnClass: "btn btn-danger btn-sm"
    };
  }

  defaultData() {
    return {
      fields: [
        { label: "Date:", type: "date", name: "invoiceDate", row: 1 },
        { label: "Vno:", type: "text", name: "vno", row: 1 },
        { label: "Invoice No:", type: "text", name: "config.invoice_no", row: 1, disabled: true },
        { label: "Company:", type: "text", name: "company", className: "formly-company", autoComplete: true },
        { label: "Godown:", type: "text", name: "config.storageLocationId", row: 2 },
        { label: "Supplier:", type: "text", name: "supplier", row: 3 },
        { label: "Narr:", type: "text", name: "narr", row: 3 },
        { label: "CST/IGST:", type: "select", name: "cst_igst", row: 4, options: [{ label: "CST", value: "CST" }, { label: "IGST", value: "IGST" }] },
        { label: "For LBT:", type: "select", name: "forlbt", row: 4, options: [{ label: "Yes", value: "yes" }, { label: "No", value: "no" }] },
        { label: "PO No:", type: "text", name: "po_no", row: 4, required: true },
        {
          label: "Particulars:",
          type: "array",
          name: "particulars",
          row: 2,
          fields: [
            { label: "Name", type: "text", name: "name" },
            { label: "Quantity", type: "number", name: "quantity" },
            { label: "SGST", type: "number", name: "sgst" },
            { label: "CGST", type: "number", name: "cgst" },
            { label: "MRP", type: "number", name: "mrp" },
            { label: "Purchase Rate", type: "number", name: "purchaseRate" },
            { label: "Sale Rate", type: "number", name: "saleRate" },
            { label: "Discount", type: "number", name: "discount" },
            { label: "Discounted Sub Total", type: "number", name: "discountedSubTotal" },
            { label: "Tax Total", type: "number", name: "taxTotal" }
          ]
        }
      ],
      particulars: [
        {
          name: "",
          quantity: "",
          sgst: "",
          cgst: "",
          mrp: "",
          saleRate: "",
          discount: "",
        }
      ]
    };
  }

  render() {
    this.innerHTML = "";
    const form = this.createElement("form", this.config.formClass);

    this.data.fields.forEach(field => {
      if (field.type === "array") {
        form.appendChild(this.renderArrayField(field));
      } else {
        const row = this.createElement("div", this.config.formRowClass);
        row.appendChild(this.createLabel(field));
        row.appendChild(this.createInput(field));
        form.appendChild(row);
      }
    });

    const submitButton = this.createElement("button", this.config.formButtonClass, "Add Product");
    submitButton.type = "submit";
    form.appendChild(submitButton);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // Gather main fields
      const mainData = Object.fromEntries(new FormData(form));
      // Gather particulars (array fields)
      const particularsField = this.data.fields.find(f => f.type === "array" && f.name === "particulars");
      let particulars = [];
      if (particularsField) {
        const rows = form.querySelectorAll(".particulars-array-row");
        rows.forEach(row => {
          const obj = {};
          particularsField.fields.forEach(f => {
            const input = row.querySelector(`[name="${f.name}"]`);
            obj[f.name] = input ? input.value : "";
          });
          particulars.push(obj);
        });
      }
      this.dispatchEvent(
        new CustomEvent("submit", {
          detail: { ...mainData, particulars },
          bubbles: true,
          composed: true,
        })
      );
    });

    this.appendChild(form);
  }

  renderArrayField(field) {
    const wrapper = this.createElement("div", this.config.formRowClass);
    wrapper.appendChild(this.createLabel(field));
    const table = this.createElement("table", this.config.particularsTableClass);
    const thead = this.createElement("thead");
    const headerRow = this.createElement("tr");
    field.fields.forEach(f => headerRow.appendChild(this.createElement("th", null, f.label)));
    headerRow.appendChild(this.createElement("th", null, "")); // For remove button
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = this.createElement("tbody");
    (this.data.particulars || []).forEach((particular, idx) => {
      tbody.appendChild(this.renderArrayRow(field, particular, idx));
    });
    table.appendChild(tbody);

    // Add button
    const addBtn = this.createElement("button", this.config.particularsAddBtnClass, "+ Add Row");
    addBtn.type = "button";
    addBtn.addEventListener("click", () => {
      this.data.particulars.push({});
      this.render();
    });

    wrapper.appendChild(table);
    wrapper.appendChild(addBtn);
    return wrapper;
  }

  renderArrayRow(field, particular, idx) {
    const tr = this.createElement("tr", "particulars-array-row");
    field.fields.forEach(f => {
      const td = this.createElement("td");
      const input = this.createElement("input", this.config.formControlClass);
      input.type = f.type || "text";
      input.name = f.name;
      input.value = particular[f.name] || "";
      td.appendChild(input);
      tr.appendChild(td);
    });
    // Remove button
    const tdRemove = this.createElement("td");
    const removeBtn = this.createElement("button", this.config.particularsRemoveBtnClass, "Remove");
    removeBtn.type = "button";
    removeBtn.addEventListener("click", () => {
      this.data.particulars.splice(idx, 1);
      this.render();
    });
    tdRemove.appendChild(removeBtn);
    tr.appendChild(tdRemove);
    return tr;
  }

  createLabel(field) {
    const label = this.createElement("label", this.config.formLabelClass, field.label);
    if (field.name) label.htmlFor = field.name;
    return label;
  }

  createInput(field) {
    let input;
    if (field.type === "select") {
      input = this.createElement("select", this.config.formControlClass);
      input.name = field.name;
      (field.options || []).forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        input.appendChild(option);
      });
    } else {
      input = this.createElement("input", this.config.formControlClass);
      input.type = field.type || "text";
      input.name = field.name;
      if (field.disabled) input.disabled = true;
      if (field.required) input.required = true;
      if (field.autoComplete) input.autocomplete = "on";
      if (field.className) input.classList.add(field.className);
    }
    return input;
  }

  createElement(tag, className, textContent) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (textContent !== undefined) el.textContent = textContent;
    return el;
  }
}

// Define the custom element
customElements.define('invoice-form-component', InvoiceFormComponent);
// Define the custom element
customElements.define("invoice-component", InvoiceComponent);

// Export for window
if (!window.customElementsList) window.customElementsList = [];
window.customElementsList.push(
    { component: "invoice-form-component", componentClass: InvoiceFormComponent },
    { component: "invoice-component", componentClass: InvoiceComponent }
);
