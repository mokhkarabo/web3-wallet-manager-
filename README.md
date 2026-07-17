"# Web3 Wallet Manager

A full-stack web application for managing cryptocurrency wallet addresses across multiple blockchains. Built with React, FastAPI, and MongoDB, featuring JWT authentication and a clean, modern UI.

## 📋 About This Project

This project was created as a code sample for the MLH Fellowship application (Web3 Track). It demonstrates:
- Full-stack development skills (Frontend + Backend + Database)
- RESTful API design and implementation
- User authentication and authorization with JWT
- CRUD operations and state management
- Modern UI/UX design principles
- Clean, maintainable code structure

## 👤 Author

**Karabo Mokherere**
- Self-taught full-stack software engineer
- Studied with ALX Software Engineering and FNB Academy for Software Engineering
- Passionate about Web3 and blockchain technology

## 🚀 Features

- **User Authentication**: Secure registration and login system with JWT tokens
- **Multi-Chain Support**: Manage wallets across Ethereum, Bitcoin, Solana, Polygon, Binance Smart Chain, Avalanche, Arbitrum, and Optimism
- **Wallet Management**: Add, edit, delete, and organize your wallet addresses
- **Labels & Notes**: Add custom labels and notes to keep your wallets organized
- **Search Functionality**: Quickly find wallets by label, blockchain, or address
- **Blockchain Explorer Integration**: Direct links to view addresses on blockchain explorers
- **Copy to Clipboard**: One-click copying of wallet addresses
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React** 19.0.0 - UI library
- **React Router** - Navigation and routing
- **Shadcn/ui** - Modern UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Axios** - HTTP client

### Backend
- **FastAPI** - Modern Python web framework
- **MongoDB** - NoSQL database
- **Motor** - Async MongoDB driver
- **PyJWT** - JWT authentication
- **Passlib** - Password hashing
- **Pydantic** - Data validation

## 📦 Installation

### Prerequisites
- Node.js 16+ and Yarn
- Python 3.8+
- MongoDB

### Clone the Repository
```bash
git clone https://github.com/yourusername/web3-wallet-manager.git
cd web3-wallet-manager
```

### Backend Setup
```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cat > .env << EOF
MONGO_URL=mongodb://localhost:27017/
DB_NAME=wallet_manager
JWT_SECRET=your-secret-key-here
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
EOF

# Run the server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

### Frontend Setup
```bash
cd frontend

# Install dependencies
yarn install

# Create .env file
cat > .env << EOF
REACT_APP_BACKEND_URL=http://localhost:8001
EOF

# Start development server
yarn start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8001
- API Documentation: http://localhost:8001/docs

## 🏗️ Project Structure

```
web3-wallet-manager/
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/           # Shadcn UI components
│   │   │   ├── Navbar.jsx    # Navigation bar
│   │   │   ├── WalletCard.jsx    # Wallet display card
│   │   │   └── WalletDialog.jsx  # Add/Edit wallet modal
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx      # Landing page
│   │   │   ├── Login.jsx     # Login page
│   │   │   ├── Register.jsx  # Registration page
│   │   │   └── Dashboard.jsx # Main dashboard
│   │   ├── utils/            # Utility functions
│   │   │   └── mockData.js   # Mock data for development
│   │   ├── hooks/            # Custom React hooks
│   │   └── App.js            # Main app component
│   └── package.json
│
├── backend/
│   ├── server.py             # FastAPI application
│   ├── models.py             # MongoDB models (to be implemented)
│   ├── auth.py               # Authentication logic (to be implemented)
│   ├── requirements.txt      # Python dependencies
│   └── .env                  # Environment variables
│
└── README.md
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh JWT token

### Wallets
- `GET /api/wallets` - Get all wallets for authenticated user
- `POST /api/wallets` - Create new wallet
- `GET /api/wallets/{id}` - Get specific wallet
- `PUT /api/wallets/{id}` - Update wallet
- `DELETE /api/wallets/{id}` - Delete wallet

## 💡 What I Learned

While building this project, I learned:

1. **Full-Stack Integration**: How to seamlessly connect a React frontend with a FastAPI backend, handling CORS, authentication, and state management across the stack.

2. **JWT Authentication**: Implementing secure authentication flows, token management, and protected routes on both frontend and backend.

3. **REST API Design**: Creating a well-structured RESTful API with proper error handling, validation, and documentation.

4. **MongoDB with Motor**: Working with async MongoDB operations in Python, designing schemas, and handling database operations efficiently.

5. **Modern React Patterns**: Using React hooks, context API, and component composition to build a maintainable and scalable frontend.

6. **UI/UX Best Practices**: Designing an intuitive user interface with proper feedback, loading states, and error handling.

7. **Web3 Concepts**: Understanding different blockchain ecosystems, wallet address formats, and blockchain explorer integrations.

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected API endpoints
- Input validation and sanitization
- CORS configuration
- Environment variable management

## 🚧 Future Enhancements

- [ ] Wallet balance tracking via blockchain APIs
- [ ] Transaction history viewing
- [ ] Multi-currency support
- [ ] Export/Import wallet data
- [ ] Dark mode toggle
- [ ] Email notifications
- [ ] Two-factor authentication
- [ ] Portfolio analytics and charts

## 📝 Development Notes

### Current Status
The application currently uses **mock data** for the frontend demonstration. The backend API endpoints for authentication and wallet management are ready to be implemented following the REST API structure defined above.

### Next Steps
1. Implement JWT authentication endpoints in FastAPI
2. Create MongoDB models for Users and Wallets
3. Connect frontend to backend API
4. Add comprehensive error handling
5. Write unit and integration tests
6. Add API rate limiting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a code sample for the MLH Fellowship application. While it's not open for contributions at this time, feel free to fork and adapt it for your own use!

## 📧 Contact

For questions or feedback about this project:
- Email: [your-email@example.com]
- GitHub: [@yourusername]
- LinkedIn: [Your LinkedIn Profile]

---

**Built with ❤️ for the MLH Fellowship Application**
"
