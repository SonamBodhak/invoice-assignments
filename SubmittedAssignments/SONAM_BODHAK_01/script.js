class InvoiceComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'style.css';
        this.shadowRoot.appendChild(link);

        this.container = document.createElement('div');
        this.shadowRoot.appendChild(this.container);
    }

    static get observedAttributes() {
        return ['data', 'config'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue && oldValue !== newValue) {
            if (name === 'data') {
                this.data = JSON.parse(newValue);
            }
            if (name === 'config') {
                this.config = JSON.parse(newValue);
            }
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {

        if (!this.data) return;

        const config = this.config || {};
        const data = this.data;

        this.container.innerHTML = '';
        this.container.className = config.containerClass || '';

        /* HEADER */
        const header = document.createElement('div');
        header.className = config.headerClass;

        if (data.logo) {
            const logo = document.createElement('img');
            logo.src = data.logo;
            logo.className = config.logoClass;
            header.appendChild(logo);
        }

        const title = document.createElement('h1');
        title.textContent = 'INVOICE';
        title.className = config.titleClass;
        header.appendChild(title);

        this.container.appendChild(header);

        /* DETAILS */
        const details = document.createElement('div');
        details.className = config.detailsClass;

        details.appendChild(this.createInfo("Seller", data.party, config.sellerInfoClass));
        details.appendChild(this.createInfo("Client", data.company, config.clientInfoClass));

        this.container.appendChild(details);

        /* TABLE */
        const itemsWrapper = document.createElement('div');
        itemsWrapper.className = config.itemsClass;

        const table = document.createElement('table');
        table.className = config.tableClass;

        const keys = new Set();
        data.items.forEach(item => {
            Object.keys(item).forEach(k => keys.add(k));
        });

        const thead = document.createElement('thead');
        const trHead = document.createElement('tr');
        trHead.appendChild(this.th('Product'));

        keys.forEach(k => {
            if (k !== 'name') trHead.appendChild(this.th(k));
        });

        thead.appendChild(trHead);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        data.items.forEach(item => {
            const tr = document.createElement('tr');
            tr.appendChild(this.td(item.name));

            keys.forEach(k => {
                if (k !== 'name') tr.appendChild(this.td(item[k] ?? ''));
            });

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        itemsWrapper.appendChild(table);
        this.container.appendChild(itemsWrapper);

        /* TOTAL */
        const total = document.createElement('div');
        total.className = config.totalSectionClass;

        total.innerHTML = `
            <div>Subtotal: ₹ ${data.subTotal}</div>
            <div>Discount: ₹ ${data.discount}</div>
            <div>Taxable: ₹ ${data.taxableAmount}</div>
            <div>SGST: ₹ ${data.sgstTotal}</div>
            <div>CGST: ₹ ${data.cgstTotal}</div>
            <div><strong>Total: ₹ ${data.totalAmount}</strong></div>
        `;

        this.container.appendChild(total);

        /* AMOUNT WORDS */
        const words = document.createElement('div');
        words.className = config.amountInWordsClass;
        words.textContent = "Amount in words: " + data.amountInWords;
        this.container.appendChild(words);

        /* BANK */
        if (config.showBankDetails && data.bankDetails) {
            const bank = document.createElement('div');
            bank.innerHTML = `
                <h3>Bank Details</h3>
                <p>Bank: ${data.bankDetails.bank}</p>
                <p>Account: ${data.bankDetails.account}</p>
                <p>IFSC: ${data.bankDetails.ifsc}</p>
            `;
            this.container.appendChild(bank);
        }

        /* TERMS */
        if (config.showTerms && data.terms) {
            const terms = document.createElement('div');
            terms.innerHTML = "<strong>Terms:</strong>";
            data.terms.forEach(t => {
                const p = document.createElement('p');
                p.textContent = t;
                terms.appendChild(p);
            });
            this.container.appendChild(terms);
        }

        /* FOOTER */
        const footer = document.createElement('div');
        footer.className = config.footerClass;
        footer.innerHTML = `<p class="${config.footerTextClass}">Thank you for your business!</p>
                            <button onclick="window.print()">Print Invoice</button>`;
        this.container.appendChild(footer);
    }

    createInfo(title, info, className) {
        const div = document.createElement('div');
        div.className = className;

        div.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Name:</strong> ${info?.name ?? ''}</p>
            <p><strong>Mobile:</strong> ${info?.mobile ?? ''}</p>
            <p><strong>Email:</strong> ${info?.email ?? ''}</p>
            <p><strong>City:</strong> ${info?.address?.city ?? ''}</p>
        `;
        return div;
    }

    th(text) {
        const th = document.createElement('th');
        th.textContent = text;
        return th;
    }

    td(text) {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    }
}

customElements.define('invoice-component', InvoiceComponent);