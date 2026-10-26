import React, { useState } from 'react';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import MobileNav from './components/layout/MobileNav';
import BottomNav from './components/layout/BottomNav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import FloatingContactHub from './components/common/FloatingContactHub';

// Modals & Drawers
import ProductModal from './components/modals/ProductModal';
import SearchModal from './components/modals/SearchModal';
import WishlistDrawer from './components/modals/WishlistDrawer';
import CartDrawer from './components/modals/CartDrawer';
import EnquiryModal from './components/modals/EnquiryModal';
import GoldCalculatorModal from './components/modals/GoldCalculatorModal';

// Hooks
import { useWishlist } from './hooks/useWishlist';
import { useCart } from './hooks/useCart';

export default function App() {
  // Language state (English / Tamil)
  const [lang, setLang] = useState('en');

  // Category state
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modals state
  const [activeProduct, setActiveProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Temporary feedback indicator
  const [toastMessage, setToastMessage] = useState('');

  // Custom Hooks
  const {
    wishlist,
    wishlistCount,
    toggleWishlist,
    isInWishlist,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  const {
    cartItems,
    totalItems: cartCount,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  // Product quick view handler
  const handleQuickView = (product) => {
    setActiveProduct(product);
  };

  // Enquiry trigger
  const handleEnquire = (product = null) => {
    setEnquiryProduct(product);
    setIsEnquiryOpen(true);
  };

  // Wishlist toggle with feedback toast
  const handleToggleWishlist = (product) => {
    const isSaved = isInWishlist(product.id);
    toggleWishlist(product);
    showToast(isSaved ? `Removed ${product.name} from Saved Pieces` : `Saved ${product.name} to Wishlist`);
  };

  // Add to Demo Bag with feedback
  const handleAddToBag = (product) => {
    addToCart(product, 1);
    showToast(`Added ${product.name} to Enquiry Bag`);
  };

  const handleEnquireFromWishlist = (items) => {
    const firstItem = items && items.length > 0 ? items[0] : null;
    handleEnquire(firstItem);
  };

  const handleEnquireFromBag = (items) => {
    const firstItem = items && items.length > 0 ? items[0].product : null;
    handleEnquire(firstItem);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ta' : 'en'));
    showToast(lang === 'en' ? 'மொழி: தமிழ் தேர்ந்தெடுக்கப்பட்டது' : 'Language switched to English');
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans selection:bg-gold-200 selection:text-maroon pb-14 md:pb-0">
      {/* 1. Live Gold Rate Marquee Announcement Bar (like PPC Jewelry) */}
      <AnnouncementBar onOpenCalculator={() => setIsCalculatorOpen(true)} />

      {/* 2. Main Navigation Bar with Language Toggle & Actions */}
      <Navbar
        wishlistCount={wishlistCount}
        cartCount={cartCount}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMobileNav={() => setIsMobileNavOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* 3. Main Content: Home Page */}
      <div className="flex-1">
        <HomePage
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
          onQuickView={handleQuickView}
          onEnquire={handleEnquire}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          lang={lang}
        />
      </div>

      {/* 4. Footer */}
      <Footer
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenEnquiry={() => handleEnquire(null)}
      />

      {/* 5. Floating Quick Action Hub (WhatsApp + Call + Scroll to Top) */}
      <FloatingContactHub onOpenEnquiry={() => handleEnquire(null)} />

      {/* 6. Fixed Bottom App Navigation Bar for Mobile (like PPC Jewelry) */}
      <BottomNav
        wishlistCount={wishlistCount}
        cartCount={cartCount}
        onOpenSearch={() => setIsSearchOpen(false) || setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* --- Modals and Drawers --- */}

      {/* Gold Rate Calculator Modal */}
      <GoldCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={activeProduct}
        isOpen={Boolean(activeProduct)}
        onClose={() => setActiveProduct(null)}
        onEnquire={(prod) => {
          setActiveProduct(null);
          handleEnquire(prod);
        }}
        isWishlisted={activeProduct ? isInWishlist(activeProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToBag={handleAddToBag}
        isAddedToBag={activeProduct ? cartItems.some(i => i.product.id === activeProduct.id) : false}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => {
          setIsSearchOpen(false);
          setActiveProduct(prod);
        }}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemove={removeFromWishlist}
        onClear={clearWishlist}
        onSelectProduct={(prod) => {
          setActiveProduct(prod);
        }}
        onEnquireAll={handleEnquireFromWishlist}
      />

      {/* Demo Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={updateQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
        onSelectProduct={(prod) => {
          setActiveProduct(prod);
        }}
        onEnquireBag={handleEnquireFromBag}
      />

      {/* Enquiry & Consultation Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => {
          setIsEnquiryOpen(false);
          setEnquiryProduct(null);
        }}
        selectedProduct={enquiryProduct}
      />

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        wishlistCount={wishlistCount}
        cartCount={cartCount}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenEnquiry={() => handleEnquire(null)}
      />

      {/* Subtle Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-charcoal text-ivory text-xs px-4 py-3 border-l-2 border-gold shadow-2xl animate-fade-in flex items-center gap-2 max-w-sm rounded-sm">
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
