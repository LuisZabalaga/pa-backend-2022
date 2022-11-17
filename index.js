const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const pool = require('./config/db');
const errorController = require('./controllers/error');
const customerRoutes = require('./routes/customers');
const providerRoutes = require('./routes/providers');
const categorieRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');
const expenseRoutes = require('./routes/expenses');
const employeeRoutes = require('./routes/employees');
const typeExpenseRoutes = require('./routes/type-expense');
const rolesRoutes = require('./routes/roles');
const cashRegisterRoutes = require('./routes/cash-register');
const temporaryPurchaseDetailRoutes = require('./routes/purchase-detail-temporary');
const purchasesDetailRoutes = require('./routes/purchase-detail');
const purchasesRoutes = require('./routes/purchases');
const temporarySalesDetailRoutes = require('./routes/sales-detail-temporary');
const salesDetailRoutes = require('./routes/sales-detail');
const salesRoutes = require('./routes/sales');
const advancesRoutes = require('./routes/advances');
const advancesCustomerRoutes = require('./routes/advances-customer');
const advancesStateRoutes = require('./routes/advances-state');
const ticketRoutes = require('./routes/ticket');
const ticketSaleRoutes = require('./routes/ticket-sale');
const LastPurchasesIdRoutes = require('./routes/purchase-id');
const LastSaleIdRoutes = require('./routes/sale-id');
const usersRoutes = require('./routes/users');
const reportsRoutes = require('./routes/reports');
const cashRegisterBalanceRoutes = require('./routes/cash-register-balance');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//Settings
const ports = process.env.PORT || 3001;

//Routes
app.use('/customers', customerRoutes);
app.use('/providers', providerRoutes);
app.use('/categories', categorieRoutes);
app.use('/products', productRoutes);
app.use('/expenses', expenseRoutes);
app.use('/employees', employeeRoutes);
app.use('/type-expenses', typeExpenseRoutes);
app.use('/roles', rolesRoutes);
app.use('/cash-register', cashRegisterRoutes);
app.use('/temporary-purchase-detail', temporaryPurchaseDetailRoutes);
app.use('/purchases-detail', purchasesDetailRoutes);
app.use('/purchases', purchasesRoutes);
app.use('/temporary-sales-detail', temporarySalesDetailRoutes);
app.use('/sales-detail', salesDetailRoutes);
app.use('/sales', salesRoutes);
app.use('/advances', advancesRoutes);
app.use('/advances-customer', advancesCustomerRoutes);
app.use('/advances-state', advancesStateRoutes);
app.use('/ticket', ticketRoutes);
app.use('/ticket-sale', ticketSaleRoutes);
app.use('/purchase-id', LastPurchasesIdRoutes);
app.use('/sale-id', LastSaleIdRoutes);
app.use('/users', usersRoutes);
app.use('/reports', reportsRoutes);
app.use('/cash-register-balance', cashRegisterBalanceRoutes),
app.use(errorController.get404);
app.use(errorController.get500);


//Check database connection
pool.connect(err => {
    if (err) { console.log(err, 'Error in connection') }
    else { console.log('DataBase is connected!!!') };
});

//Servidor corriendo
app.listen(ports, () => {
    console.log(`Server is running on port ${ports}`);
});
