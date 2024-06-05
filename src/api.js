const API_URL = 'http://localhost:3000';

// Categories
export class Category {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;

    }
}

/**
 * Fetches the categories from the API.
 * @returns {Promise<Array<Category>>} The categories array.
 */
export async function getCategories() {
    const response = await fetch(`${API_URL}/categories`);
    const categories = await response.json();
    return categories.map(category => new Category(category.id, category.name, category.description));
}

/**
 * Fetches a category by its id.
 * @param {number} id The category id.
 * @returns {Promise<Category>} The category.
 */
export async function getCategoryById(id) {
    const response = await fetch(`${API_URL}/categories/${id}`);
    const category = await response.json();
    return new Category(category.id, category.name, category.description);
}

/**
 * Creates a new category.
 * @param {string} name The category name.
 * @param {string} description The category description.
 * @returns {Promise<Category>} The created category.
 */
export async function createCategory(name, description) {
    const response = await fetch(`${API_URL}/categories`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
    });
    const category = await response.json();
    return new Category(category.id, category.name, category.description);
}

/**
 * Updates a category.
 * @param {number} id The category id.
 * @param {string} name The category name.
 * @param {string} description The category description.
 * @returns {Promise<Category>} The updated category.
 */
export async function updateCategory(id, name, description) {
    const response = await fetch(`${API_URL}/categories/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
    });
    const category = await response.json();
    return new Category(category.id, category.name, category.description);
}

/**
 * Deletes a category.
 * @param {number} id The category id.
 * @returns {Promise<void>}
 */
export async function deleteCategory(id) {
    await fetch(`${API_URL}/categories/${id}`, {
        method: 'DELETE'
    });
}

// Accounts

/*
{
	"id": 3,
	"name": "KSPR",
	"description": "NuBank - MEI"
}
*/
export class Account {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

/**
 * Fetches the accounts from the API.
 * @returns {Promise<Array<Account>>} The accounts array.
 */
export async function getAccounts() {
    const response = await fetch(`${API_URL}/accounts`);
    const accounts = await response.json();
    return accounts.map(account => new Account(account.id, account.name, account.description));
}

/**
 * Fetches an account by its id.
 * @param {number} id The account id.
 * @returns {Promise<Account>} The account.
 */
export async function getAccountById(id) {
    const response = await fetch(`${API_URL}/accounts/${id}`);
    const account = await response.json();
    return new Account(account.id, account.name, account.description);
}

/**
 * Creates a new account.
 * @param {string} name The account name.
 * @param {string} description The account description.
 * @returns {Promise<Account>} The created account.
 */
export async function createAccount(name, description) {
    const response = await fetch(`${API_URL}/accounts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
    });
    const account = await response.json();
    return new Account(account.id, account.name, account.description);
}

/**
 * Updates an account.
 * @param {number} id The account id.
 * @param {string} name The account name.
 * @param {string} description The account description.
 * @returns {Promise<Account>} The updated account.
 */
export async function updateAccount(id, name, description) {
    const response = await fetch(`${API_URL}/accounts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
    });
    const account = await response.json();
    return new Account(account.id, account.name, account.description);
}

/**
 * Deletes an account.
 * @param {number} id The account id.
 * @returns {Promise<void>}
 */
export async function deleteAccount(id) {
    await fetch(`${API_URL}/accounts/${id}`, {
        method: 'DELETE'
    });
}

/**
 * Fetches the account balance from the API.
 * @param {number} id The account id.
 * @returns {Promise<number>} The account balance.
 */
export async function getAccountBalance(id) {
    const response = await fetch(`${API_URL}/accounts/${id}/balance`);
    const balance = await response.json();
    return balance;
}

// Transactions

export class Transaction {
    constructor(id, date, description, amount, categoryId, accountId) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.amount = amount;
        this.categoryId = categoryId;
        this.accountId = accountId;
    }
}

/**
 * Fetches the transactions from the API.
 * @returns {Promise<Array<Transaction>>} The transactions array.
 */
export async function getTransactions() {
    const response = await fetch(`${API_URL}/transactions`);
    const transactions = await response.json();
    return transactions.map(transaction => new Transaction(transaction.id, transaction.date, transaction.description, transaction.amount, transaction.categoryId, transaction.accountId));
}

/**
 * Fetches a transaction by its id.
 * @param {number} id The transaction id.
 * @returns {Promise<Transaction>} The transaction.
 */
export async function getTransactionById(id) {
    const response = await fetch(`${API_URL}/transactions/${id}`);
    const transaction = await response.json();
    return new Transaction(transaction.id, transaction.date, transaction.description, transaction.amount, transaction.categoryId, transaction.accountId);
}

/**
 * Creates a new transaction.
 * @param {string} date The transaction date.
 * @param {string} description The transaction description.
 * @param {number} amount The transaction amount.
 * @param {number} categoryId The transaction category id.
 * @param {number} accountId The transaction account id.
 * @returns {Promise<Transaction>} The created transaction.
 */
export async function createTransaction(date, description, amount, categoryId, accountId) {
    const response = await fetch(`${API_URL}/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date, description, amount, categoryId, accountId })
    });
    const transaction = await response.json();
    return new Transaction(transaction.id, transaction.date, transaction.description, transaction.amount, transaction.categoryId, transaction.accountId);
}

/**
 * Updates a transaction.
 * @param {number} id The transaction id.
 * @param {string} date The transaction date.
 * @param {string} description The transaction description.
 * @param {number} amount The transaction amount.
 * @param {number} categoryId The transaction category id.
 * @param {number} accountId The transaction account id.
 * @returns {Promise<Transaction>} The updated transaction.
 */
export async function updateTransaction(id, date, description, amount, categoryId, accountId) {
    const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date, description, amount, categoryId, accountId })
    });
    const transaction = await response.json();
    return new Transaction(transaction.id, transaction.date, transaction.description, transaction.amount, transaction.categoryId, transaction.accountId);
}

/**
 * Deletes a transaction.
 * @param {number} id The transaction id.
 * @returns {Promise<void>}
 */
export async function deleteTransaction(id) {
    await fetch(`${API_URL}/transactions/${id}`, {
        method: 'DELETE'
    });
}

