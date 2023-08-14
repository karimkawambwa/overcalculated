### Design Doc

#### Calculator Application: Technical Design Document

**Objective:**  
Design and implement a web-based calculator with basic arithmetic, memory functions, and user authentication.

**Components:**  
1. **Frontend** - Browser-based User Interface.
2. **Backend** - Server to handle authentication, storage, and business logic.

**Technologies:**
- **Frontend:** HTML, CSS, JavaScript (React Framework for dynamic UI).
- **Backend:** Python with Flask framework for a lightweight server. SQLite for database.

**Features and Implementation:**

1. **UI Components**:
   - **Display Area**: To show input and results.
   - **Number Pad**: Buttons 0-9 and a decimal point.
   - **Operation Buttons**: +, -, *, /, %, √, ^.
   - **Memory Buttons**: M+, M-, MR, MC.
   - **History Button**: Displays the last few calculations.
   - **Navigation Bar**: Shows user's authentication status. Contains Login/Signup options.

2. **Order of Operations (PEMDAS)**: The calculator will follow the order of Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).

3. **User Authentication**:
   - **Signup**: New users can create an account using a username and password. Passwords will be hashed using bcrypt before storage.
   - **Login**: Users can log in using their credentials. Session tokens will be issued for authenticated sessions.

4. **Backend Logic**:
   - **Authentication**: To validate and authorize users.
   - **Calculations**: Handle arithmetic operations, order of precedence, and errors (e.g., divide by zero).
   - **Memory**: Store the last used number in the memory.
   - **History**: Store a list of past calculations per user.

5. **Optional Features**:
   - **Customizable UI**: Allow users to choose themes or colors.
   - **Graphing Feature**: Plot simple 2D graphs based on equations.
   - **Saveable Sessions**: Users can save and load their previous calculations.

**Database Schema**:
1. **Users Table**: UserID (Primary Key), Username, PasswordHash.
2. **History Table**: HistoryID (Primary Key), UserID (Foreign Key), Calculation, Timestamp.

**Flow**:
1. User accesses the application.
2. If authenticated, the user sees their previous calculations and can perform new ones.
3. If not authenticated, they can use the calculator but with limited features.
4. User can log in/sign up from the navigation bar.
