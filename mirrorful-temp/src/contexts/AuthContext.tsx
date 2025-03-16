import React, { createContext, useContext } from 'react';
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}
interface AuthContextType {
  user: User;
  loading: boolean;
  isAuthenticated: boolean;
}
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'admin',
  avatar: 'JD'
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  return <AuthContext.Provider value={{
    user: mockUser,
    loading: false,
    isAuthenticated: true
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};