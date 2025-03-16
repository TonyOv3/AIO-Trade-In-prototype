import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboardIcon, SmartphoneIcon, BarChart2Icon, PackageIcon, ShoppingBagIcon, RefreshCwIcon, ShieldIcon, ClipboardListIcon, UsersIcon, GavelIcon, MenuIcon, XIcon, UserIcon, LogOutIcon, BellIcon, SunIcon, MoonIcon, SearchIcon, StarIcon, PlusIcon, ChevronRightIcon, ActivityIcon, TrendingUpIcon, ClockIcon, InfoIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
interface LayoutProps {
  children: React.ReactNode;
}
interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning';
}
interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}
interface NotificationItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  isNew?: boolean;
}
const NavItem: React.FC<NavItemProps> = ({
  to,
  icon,
  label,
  isActive,
  badge,
  badgeVariant = 'default'
}) => {
  return <Link to={to} className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/80'}`}>
      <span className="flex-shrink-0 w-5 h-5">{icon}</span>
      <span className="flex-grow font-medium">{label}</span>
      {badge && <Badge variant={badgeVariant} className="ml-auto">
          {badge}
        </Badge>}
    </Link>;
};
const NotificationItem: React.FC<NotificationItemProps> = ({
  icon,
  title,
  description,
  time,
  isNew = false
}) => <div className={`flex items-start p-3 ${isNew ? 'bg-primary/5' : ''} hover:bg-muted/50 rounded-md transition-colors`}>
    <div className="flex-shrink-0 mr-3 mt-0.5">
      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <p className="font-medium truncate">{title}</p>
        {isNew && <Badge variant="success" className="ml-2">
            New
          </Badge>}
      </div>
      <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
        {description}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{time}</p>
    </div>
  </div>;
const QuickAction: React.FC<QuickActionProps> = ({
  icon,
  label,
  onClick
}) => <button onClick={onClick} className="flex flex-col items-center justify-center bg-card hover:bg-muted/80 rounded-lg p-3 transition-colors">
    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
      {icon}
    </div>
    <span className="text-xs font-medium text-center">{label}</span>
  </button>;
const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const {
    pathname
  } = useLocation();
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const {
    theme,
    toggleTheme
  } = useTheme();
  const {
    user,
    logout
  } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [pinnedPages, setPinnedPages] = useState([{
    id: 1,
    to: '/market-analysis',
    label: 'Market Analysis',
    icon: <BarChart2Icon className="h-4 w-4" />
  }, {
    id: 2,
    to: '/inventory',
    label: 'Inventory',
    icon: <PackageIcon className="h-4 w-4" />
  }]);
  const notifications = [{
    id: 1,
    icon: <TrendingUpIcon className="h-4 w-4" />,
    title: 'iPhone 13 price alert',
    description: 'Price has increased by 5% in the last 24 hours. Consider adjusting your inventory pricing.',
    time: '10 minutes ago',
    isNew: true
  }, {
    id: 2,
    icon: <PackageIcon className="h-4 w-4" />,
    title: 'Low inventory alert',
    description: 'iPhone 12 Pro (128GB, Graphite) is running low. Only 3 units left in stock.',
    time: '1 hour ago',
    isNew: true
  }, {
    id: 3,
    icon: <ClockIcon className="h-4 w-4" />,
    title: 'Auction ending soon',
    description: 'The "Premium Samsung Collection" auction ends in 2 hours. Current bid: $12,450.',
    time: '2 hours ago',
    isNew: false
  }, {
    id: 4,
    icon: <ActivityIcon className="h-4 w-4" />,
    title: 'New market report available',
    description: 'July 2023 market analysis report is now available. View the latest trends and insights.',
    time: '1 day ago',
    isNew: false
  }];
  const recentSearches = ['iPhone 13 Pro Max pricing', 'Samsung S22 trade-in value', 'Pixel 6 inventory', 'Market trends Q3 2023'];
  const togglePinPage = (path, label, icon) => {
    const isPinned = pinnedPages.some(page => page.to === path);
    if (isPinned) {
      setPinnedPages(pinnedPages.filter(page => page.to !== path));
    } else {
      setPinnedPages([...pinnedPages, {
        id: Date.now(),
        to: path,
        label,
        icon
      }]);
    }
  };
  const navItems = [{
    to: '/',
    icon: <LayoutDashboardIcon className="h-5 w-5" />,
    label: 'Dashboard'
  }, {
    to: '/phone-grading',
    icon: <SmartphoneIcon className="h-5 w-5" />,
    label: 'AI Grading',
    badge: 'New',
    badgeVariant: 'success' as const
  }, {
    to: '/market-analysis',
    icon: <BarChart2Icon className="h-5 w-5" />,
    label: 'Market Analysis'
  }, {
    to: '/inventory',
    icon: <PackageIcon className="h-5 w-5" />,
    label: 'Inventory',
    badge: '162',
    badgeVariant: 'secondary' as const
  }, {
    to: '/deal-finder',
    icon: <ShoppingBagIcon className="h-5 w-5" />,
    label: 'Marketplace'
  }, {
    to: '/trade-in',
    icon: <RefreshCwIcon className="h-5 w-5" />,
    label: 'Trade-In',
    badge: '12',
    badgeVariant: 'warning' as const
  }, {
    to: '/risk-assessment',
    icon: <ShieldIcon className="h-5 w-5" />,
    label: 'Risk Assessment'
  }, {
    to: '/order-management',
    icon: <ClipboardListIcon className="h-5 w-5" />,
    label: 'Orders'
  }, {
    to: '/trader-crm',
    icon: <UsersIcon className="h-5 w-5" />,
    label: 'CRM'
  }, {
    to: '/wholesale-auctions',
    icon: <GavelIcon className="h-5 w-5" />,
    label: 'Auctions'
  }];
  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };
  const handleQuickAction = action => {
    switch (action) {
      case 'new-trade':
        navigate('/trade-in');
        break;
      case 'add-inventory':
        navigate('/inventory');
        break;
      case 'market-check':
        navigate('/market-analysis');
        break;
      case 'risk-check':
        navigate('/risk-assessment');
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);
  const isPinned = path => pinnedPages.some(page => page.to === path);
  return <div className="flex h-screen bg-background">
      <aside className="hidden md:flex flex-col w-64 border-r bg-card">
        <div className="p-4 border-b">
          <Link to="/" className="flex items-center gap-2">
            <SmartphoneIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">PhoneAI Market</span>
          </Link>
        </div>
        {pinnedPages.length > 0 && <div className="p-3 border-b">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">
                PINNED PAGES
              </span>
            </div>
            <div className="space-y-1">
              {pinnedPages.map(page => <Link key={page.id} to={page.to} className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors ${pathname === page.to ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/80'}`}>
                  <span className="flex-shrink-0 w-4 h-4">{page.icon}</span>
                  <span className="flex-grow text-sm">{page.label}</span>
                  <StarIcon className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" onClick={e => {
              e.preventDefault();
              togglePinPage(page.to, page.label, page.icon);
            }} />
                </Link>)}
            </div>
          </div>}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground px-3">
              MAIN NAVIGATION
            </span>
          </div>
          {navItems.map(item => <div key={item.to} className="relative group">
              <NavItem to={item.to} icon={item.icon} label={item.label} isActive={pathname === item.to} badge={item.badge} badgeVariant={item.badgeVariant} />
              {!isPinned(item.to) && <button className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => togglePinPage(item.to, item.label, item.icon)}>
                  <StarIcon className="h-3.5 w-3.5 text-muted-foreground hover:text-yellow-500" />
                </button>}
            </div>)}
        </nav>
        <div className="p-3 border-t">
          <div className="flex items-center justify-between mb-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
                    {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle {theme === 'dark' ? 'light' : 'dark'} mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 relative">
                  <BellIcon className="h-4 w-4" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <div className="flex items-center justify-between p-3 border-b">
                  <span className="font-medium">Notifications</span>
                  <Badge variant="outline">2 new</Badge>
                </div>
                <ScrollArea className="h-80">
                  <div className="p-2 space-y-1">
                    {notifications.map(notification => <NotificationItem key={notification.id} icon={notification.icon} title={notification.title} description={notification.description} time={notification.time} isNew={notification.isNew} />)}
                  </div>
                </ScrollArea>
                <div className="p-2 border-t">
                  <Button variant="ghost" size="sm" className="w-full">
                    View all notifications
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <span className="text-xs text-muted-foreground">v1.2.4</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start px-2 py-1.5">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start text-sm">
                    <span className="font-medium">Alex Johnson</span>
                    <span className="text-xs text-muted-foreground">
                      Senior Trader
                    </span>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <Link to="/profile">
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>
                <LogOutIcon className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center gap-2">
            <SmartphoneIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">PhoneAI Market</span>
          </Link>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <BellIcon className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <div className="flex items-center justify-between p-3 border-b">
                  <span className="font-medium">Notifications</span>
                  <Badge variant="outline">2 new</Badge>
                </div>
                <ScrollArea className="h-80">
                  <div className="p-2 space-y-1">
                    {notifications.map(notification => <NotificationItem key={notification.id} icon={notification.icon} title={notification.title} description={notification.description} time={notification.time} isNew={notification.isNew} />)}
                  </div>
                </ScrollArea>
                <div className="p-2 border-t">
                  <Button variant="ghost" size="sm" className="w-full">
                    View all notifications
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <Button variant="ghost" size="icon" onClick={toggleMobileNav}>
              {mobileNavOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      {mobileNavOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={toggleMobileNav} />}
      <aside className={`md:hidden fixed top-[57px] left-0 bottom-0 w-64 bg-card z-50 transform transition-transform duration-300 ease-in-out ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-3 border-b">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-md border bg-background text-sm" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {navItems.map(item => <NavItem key={item.to} to={item.to} icon={item.icon} label={item.label} isActive={pathname === item.to} badge={item.badge} badgeVariant={item.badgeVariant} />)}
        </nav>
        <div className="p-3 border-t">
          <div className="flex items-center justify-between mb-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
              {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </Button>
            <span className="text-xs text-muted-foreground">v1.2.4</span>
          </div>
          <Link to="/profile">
            <Button variant="ghost" className="w-full justify-start px-2 py-1.5">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-sm">
                  <span className="font-medium">Alex Johnson</span>
                  <span className="text-xs text-muted-foreground">
                    Senior Trader
                  </span>
                </div>
              </div>
            </Button>
          </Link>
        </div>
      </aside>
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-6 pt-[calc(57px+1rem)] md:pt-6">
          {pathname === '/' && <Card className="mb-6 bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <ActivityIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Daily Market Insight</h3>
                      <p className="text-sm text-muted-foreground">
                        iPhone 13 prices have stabilized after 3 weeks of
                        decline. Good time to restock inventory.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="whitespace-nowrap">
                    View Details
                    <ChevronRightIcon className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>}
          {children}
        </div>
      </main>
    </div>;
};
export default Layout;