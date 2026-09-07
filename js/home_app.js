const collections = {
      serum: {
        glow: "rgba(214, 185, 142, 0.28)",
        items: [
          { 
            tag: "Formule № 01 — 50 ML", 
            badge: "BESTSELLER",
            rating: "4.9",
            reviews: "415",
            name: "Santal <em>Céleste</em>", 
            rawName: "Santal Céleste", 
            notes: "Aged Mysore heartwood cold-distilled with crushed cardamome and Florentine iris butter.", 
            basePrice: 24500, 
            mrpPrice: 28900,
            img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=90", 
            pyramid: ["Cardamome Noire & Baie Rose", "Beurre d'Iris Florentin", "Santal Mysore 6 Ans"] 
          },
          { 
            tag: "Formule № 04 — 30 ML", 
            badge: "RARE HARVEST",
            rating: "4.8",
            reviews: "284",
            name: "Nectar <em>d'Orris</em>", 
            rawName: "Nectar d'Orris", 
            notes: "Concentrated Tuscan iris butter peptide complex for cellular luminescence and tension release.", 
            basePrice: 28000, 
            mrpPrice: 33000,
            img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=90", 
            pyramid: ["Fleur d'Oranger Sauvage", "Racine d'Iris Pallida", "Cèdre de l'Atlas Fumé"] 
          },
          { 
            tag: "Formule № 09 — 30 ML", 
            badge: "NEW RUN",
            rating: "4.9",
            reviews: "192",
            name: "Cryo <em>Ambre</em>", 
            rawName: "Cryo Ambre", 
            notes: "Sub-zero extracted marine amber and botanical squalane restoring silken dermic density.", 
            basePrice: 21500, 
            mrpPrice: 25000,
            img: "https://images.unsplash.com/photo-1608248597359-67d710d29759?auto=format&fit=crop&w=1000&q=90", 
            pyramid: ["Sel Marin & Mandarine Givrée", "Ambre Gris Sauvage", "Benjoin de Siam"] 
          }
        ]
      },
      oil: {
        glow: "rgba(224, 170, 110, 0.28)",
        items: [
          { 
            tag: "Infusion № 11 — 50 ML", 
            badge: "BESTSELLER",
            rating: "5.0",
            reviews: "518",
            name: "Huile <em>Sublime</em>", 
            rawName: "Huile Sublime", 
            notes: "Cold-pressed Moroccan argan fortified with rare damask rose essence and 24K gold flakes.", 
            basePrice: 19800, 
            mrpPrice: 23500,
            img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1000&q=90", 
            pyramid: ["Pétale de Rose de Mai", "Argan Pur Première Pression", "Or Végétal 24K"] 
          },
          { 
            tag: "Infusion № 15 — 50 ML", 
            badge: "LIMITED RESERVE",
            rating: "4.8",
            reviews: "167",
            name: "Cyprès <em>Noir</em>", 
            rawName: "Cyprès Noir", 
            notes: "Resinous Mediterranean cypress and vetiver oil steeped in aged French oak casks.", 
            basePrice: 22000, 
            mrpPrice: 26000,
            img: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=90", 
            pyramid: ["Aiguille de Pin & Baie de Genièvre", "Cyprès de Florence", "Vétiver Bourbon Rôti"] 
          }
        ]
      },
      cream: {
        glow: "rgba(215, 195, 175, 0.26)",
        items: [
          { 
            tag: "Baume № 03 — 60 ML", 
            badge: "AWARD WINNER",
            rating: "4.9",
            reviews: "342",
            name: "Crème <em>Souveraine</em>", 
            rawName: "Crème Souveraine", 
            notes: "Whipped shea lipid emulsion infused with pure white peony root and snow lotus extracts.", 
            basePrice: 26500, 
            mrpPrice: 31000,
            img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=90", 
            pyramid: ["Lotus des Neiges", "Pivoine Blanche Impériale", "Lipides de Karité Cacao"] 
          },
          { 
            tag: "Baume № 07 — 50 ML", 
            badge: "NOCTURNE EDIT",
            rating: "4.9",
            reviews: "260",
            name: "Velours <em>Nocturne</em>", 
            rawName: "Velours Nocturne", 
            notes: "Deep-repair nighttime ceramide balm with sacred Indian frankincense resins.", 
            basePrice: 29000, 
            mrpPrice: 34500,
            img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=90", 
            pyramid: ["Lavande Vraie d'Altitude", "Encens Sacré d'Oman", "Céramides Végétales III"] 
          }
        ]
      },
      elixir: {
        glow: "rgba(205, 155, 90, 0.3)",
        items: [
          { 
            tag: "Élixir № 21 — 100 ML", 
            badge: "SIGNATURE BATCH",
            rating: "5.0",
            reviews: "488",
            name: "Ambre <em>Solaire</em>", 
            rawName: "Ambre Solaire", 
            notes: "Sensual ambergris accord lifted by sun-drenched bergamot and bourbon vanilla beans.", 
            basePrice: 34000, 
            mrpPrice: 39500,
            img: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=90", 
            pyramid: ["Bergamote de Calabre", "Ambrette & Jasmin Sambac", "Gousse de Vanille Bourbon"] 
          },
          { 
            tag: "Élixir № 25 — 50 ML", 
            badge: "VINTAGE OUD",
            rating: "4.9",
            reviews: "310",
            name: "Oud <em>Impérial</em>", 
            rawName: "Oud Impérial", 
            notes: "Thirty-year aged wild Assamese oud wood blended with smoked tonka bean tears.", 
            basePrice: 42000, 
            mrpPrice: 49000,
            img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=90", 
            pyramid: ["Safran Sauvage & Noix de Muscade", "Bois d'Agar d'Assam 30 Ans", "Fève Tonka Noire"] 
          }
        ]
      },
      mist: {
        glow: "rgba(180, 195, 210, 0.28)",
        items: [
          { 
            tag: "Hydrosol № 02 — 120 ML", 
            badge: "GLACIAL PURITY",
            rating: "4.8",
            reviews: "176",
            name: "Brume <em>d'Argent</em>", 
            rawName: "Brume d'Argent", 
            notes: "Colloidal silver water enriched with Roman chamomile and alpine glacier extracts.", 
            basePrice: 14500, 
            mrpPrice: 17500,
            img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=90", 
            pyramid: ["Eau Glaciaire Suisse", "Camomille Romaine Sauvage", "Particules d'Argent Pur"] 
          }
        ]
      }
    };

    function haptic(ms = 8) {
      if (navigator.vibrate) navigator.vibrate(ms);
    }

    function showToast(text) {
      const toast = document.getElementById('toastAlert');
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2400);
    }

    let currentCategory = 'serum';
    let currentIndex = 0;
    let isAnimating = false;
    let activeVolMultiplier = 1.0;

    // Elements
    const prodImg = document.getElementById('productDisplay');
    const prodCanvas = document.getElementById('productCanvas');
    const prodBadge = document.getElementById('prodBadge');
    const prodTag = document.getElementById('prodTag');
    const prodName = document.getElementById('prodName');
    const prodRating = document.getElementById('prodRating');
    const prodReviews = document.getElementById('prodReviews');
    const prodNotes = document.getElementById('prodNotes');
    const prodPrice = document.getElementById('prodPrice');
    const prodMrp = document.getElementById('prodMrp');
    const prodDiscount = document.getElementById('prodDiscount');
    const countActive = document.getElementById('countActive');
    const countTotal = document.getElementById('countTotal');
    const dotsTrack = document.getElementById('dotsTrack');
    const detailsBox = document.getElementById('detailsTriggerArea');
    const ambientGlow = document.getElementById('ambientGlow');

    function updateDots() {
      const total = collections[currentCategory].items.length;
      dotsTrack.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === currentIndex ? 'active' : ''}`;
        dotsTrack.appendChild(dot);
      }
      countActive.textContent = `0${currentIndex + 1}`;
      countTotal.textContent = `0${total}`;
    }

    function renderProduct(direction = 1) {
      if (isAnimating) return;
      isAnimating = true;
      haptic(10);

      const product = collections[currentCategory].items[currentIndex];
      ambientGlow.style.background = `radial-gradient(ellipse, ${collections[currentCategory].glow} 0%, transparent 68%)`;

      gsap.to(detailsBox, { opacity: 0, y: 8, duration: 0.2, ease: 'power2.in' });

      gsap.to(prodImg, {
        opacity: 0,
        x: direction * -35,
        scale: 0.94,
        duration: 0.28,
        ease: 'power2.in',
        onComplete: () => {
          prodImg.src = product.img;
          prodBadge.textContent = product.badge;
          prodTag.innerHTML = product.tag;
          prodName.innerHTML = product.name;
          prodRating.textContent = product.rating;
          prodReviews.textContent = `(${product.reviews} Reviews)`;
          prodNotes.innerHTML = product.notes;

          // Price and Discount Calculations
          const sellPrice = Math.round(product.basePrice * activeVolMultiplier);
          const mrpPrice = Math.round(product.mrpPrice * activeVolMultiplier);
          const discountPercent = Math.round(((mrpPrice - sellPrice) / mrpPrice) * 100);
          const savingsAmount = mrpPrice - sellPrice;

          prodPrice.innerHTML = `₹${sellPrice.toLocaleString('en-IN')}`;
          prodMrp.innerHTML = `₹${mrpPrice.toLocaleString('en-IN')}`;
          prodDiscount.innerHTML = `${discountPercent}% OFF • SAVE ₹${savingsAmount.toLocaleString('en-IN')}`;
          
          updateDots();
          syncProductInfoData();
          syncCartDisplay();

          gsap.set(prodImg, { x: direction * 35, scale: 0.94, opacity: 0 });
          gsap.to(prodImg, { x: 0, scale: 1, opacity: 1, duration: 0.45, ease: 'power3.out' });
          gsap.fromTo(detailsBox, 
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.38, ease: 'power2.out', delay: 0.06, onComplete: () => {
              isAnimating = false;
            }}
          );
        }
      });
    }

    function nextProduct() {
      const total = collections[currentCategory].items.length;
      currentIndex = (currentIndex + 1) % total;
      renderProduct(1);
    }

    function prevProduct() {
      const total = collections[currentCategory].items.length;
      currentIndex = (currentIndex - 1 + total) % total;
      renderProduct(-1);
    }

    document.getElementById('nextBtn').addEventListener('click', nextProduct);
    document.getElementById('prevBtn').addEventListener('click', prevProduct);

    // Touch Swipe Drag
    let startX = 0, currentDragX = 0, isDragging = false;
    const swipeArea = document.getElementById('swipeArea');

    swipeArea.addEventListener('touchstart', (e) => {
      if (isAnimating) return;
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });

    swipeArea.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentDragX = e.touches[0].clientX - startX;
      const resistanceX = currentDragX * 0.32;
      gsap.set(prodCanvas, { x: resistanceX, rotation: resistanceX * 0.03 });
    }, { passive: true });

    swipeArea.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      if (currentDragX < -45) {
        gsap.to(prodCanvas, { x: 0, rotation: 0, duration: 0.2 });
        nextProduct();
      } else if (currentDragX > 45) {
        gsap.to(prodCanvas, { x: 0, rotation: 0, duration: 0.2 });
        prevProduct();
      } else {
        gsap.to(prodCanvas, { x: 0, rotation: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
      }
      currentDragX = 0;
    });

    // Category Buttons
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedCat = btn.dataset.cat;
        if (selectedCat === currentCategory || isAnimating) return;
        haptic(12);
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        currentCategory = selectedCat;
        currentIndex = 0;
        renderProduct(1);
      });
    });

    // ========================================================
    // MODAL DISPATCHERS
    // ========================================================
    const globalBackdrop = document.getElementById('globalBackdrop');
    const productInfoSheet = document.getElementById('productInfoSheet');
    const centerMenuModal = document.getElementById('centerMenuModal');
    const sideCartDrawer = document.getElementById('sideCartDrawer');
    const userAuthSheet = document.getElementById('userAuthSheet');
    const searchSubBar = document.getElementById('searchSubBar');

    function closeAllModals() {
      productInfoSheet.classList.remove('open');
      centerMenuModal.classList.remove('open');
      sideCartDrawer.classList.remove('open');
      userAuthSheet.classList.remove('open');
      searchSubBar.classList.remove('active');
      globalBackdrop.classList.remove('active');
    }

    // STRICT CLOSE: Backdrop ignores Menu and User Sheet
    globalBackdrop.addEventListener('click', () => {
      if (centerMenuModal.classList.contains('open') || userAuthSheet.classList.contains('open')) {
        haptic(6);
        return;
      }
      closeAllModals();
    });

    // Product Info Drawer
    const drawerTitle = document.getElementById('drawerTitle');
    const drawerThumb = document.getElementById('drawerThumb');
    const drawerPriceBtn = document.getElementById('drawerPriceBtn');
    const noteTop = document.getElementById('noteTop');
    const noteHeart = document.getElementById('noteHeart');
    const noteBase = document.getElementById('noteBase');

    function syncProductInfoData() {
      const product = collections[currentCategory].items[currentIndex];
      drawerTitle.innerHTML = product.name;
      drawerThumb.src = product.img;

      if (product.pyramid) {
        noteTop.textContent = product.pyramid[0];
        noteHeart.textContent = product.pyramid[1];
        noteBase.textContent = product.pyramid[2];
      }

      const calcPrice = Math.round(product.basePrice * activeVolMultiplier);
      drawerPriceBtn.textContent = `Acquire — ₹${calcPrice.toLocaleString('en-IN')}`;
    }

    function openProductInfoDrawer() {
      haptic(15);
      closeAllModals();
      syncProductInfoData();
      globalBackdrop.classList.add('active');
      productInfoSheet.classList.add('open');
    }

    document.getElementById('openProductInfoBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      openProductInfoDrawer();
    });
    document.getElementById('detailsTriggerArea').addEventListener('click', openProductInfoDrawer);
    document.getElementById('closeProductInfoBtn').addEventListener('click', closeAllModals);

    function selectVol(ml, multiplier, card) {
      haptic(10);
      document.querySelectorAll('.vol-card').forEach(b => b.classList.remove('active'));
      card.classList.add('active');
      activeVolMultiplier = multiplier;

      const product = collections[currentCategory].items[currentIndex];
      const sellPrice = Math.round(product.basePrice * multiplier);
      const mrpPrice = Math.round(product.mrpPrice * multiplier);
      const discountPercent = Math.round(((mrpPrice - sellPrice) / mrpPrice) * 100);
      const savingsAmount = mrpPrice - sellPrice;

      prodPrice.textContent = `₹${sellPrice.toLocaleString('en-IN')}`;
      prodMrp.textContent = `₹${mrpPrice.toLocaleString('en-IN')}`;
      prodDiscount.textContent = `${discountPercent}% OFF • SAVE ₹${savingsAmount.toLocaleString('en-IN')}`;
      drawerPriceBtn.textContent = `Acquire — ₹${sellPrice.toLocaleString('en-IN')}`;
    }

    async function handleShare() {
      haptic(12);
      const product = collections[currentCategory].items[currentIndex];
      const sharePayload = {
        title: `${product.rawName} — L'Atelier Paris`,
        text: `Explore the formulation of ${product.rawName}: ${product.notes}`,
        url: window.location.href
      };

      if (navigator.share) {
        try { await navigator.share(sharePayload); } catch (err) {}
      } else {
        try {
          await navigator.clipboard.writeText(`${sharePayload.title}\n${sharePayload.url}`);
          showToast("Édition Link Copied");
        } catch (e) {
          showToast("Archived at L'Atelier");
        }
      }
    }
    document.getElementById('shareBtn').addEventListener('click', handleShare);

    function triggerReserve() {
      haptic(20);
      const btn = document.getElementById('drawerBuyBtn');
      btn.style.background = 'var(--bronze)';
      drawerPriceBtn.textContent = 'Allocated to Vault ✓';
      setTimeout(() => {
        closeAllModals();
        setTimeout(() => {
          btn.style.background = 'var(--text)';
          syncProductInfoData();
        }, 400);
      }, 900);
    }

    function triggerExplore() {
      haptic(12);
      closeAllModals();
      showToast("Opening Monograph Archive...");
    }

    // Search
    document.getElementById('searchBtn').addEventListener('click', () => {
      haptic(10);
      searchSubBar.classList.toggle('active');
      if (searchSubBar.classList.contains('active')) {
        document.getElementById('searchInput').focus();
      }
    });

    // Menu Modal
    document.getElementById('menuBtn').addEventListener('click', () => {
      haptic(12);
      closeAllModals();
      globalBackdrop.classList.add('active');
      centerMenuModal.classList.add('open');
    });

    document.getElementById('closeMenuBtn').addEventListener('click', closeAllModals);

    function openPageNotice(title) {
      haptic(10);
      showToast(`${title}`);
    }

    // Cart Drawer
    function syncCartDisplay() {
      const product = collections[currentCategory].items[currentIndex];
      document.getElementById('cartThumb').src = product.img;
      document.getElementById('cartItemName').textContent = product.rawName;
      const calcPrice = Math.round(product.basePrice * activeVolMultiplier);
      document.getElementById('cartItemPrice').textContent = `₹${calcPrice.toLocaleString('en-IN')}`;
      document.getElementById('cartSubtotal').textContent = `₹${calcPrice.toLocaleString('en-IN')}`;
    }

    document.getElementById('cartBtn').addEventListener('click', () => {
      haptic(12);
      closeAllModals();
      syncCartDisplay();
      globalBackdrop.classList.add('active');
      sideCartDrawer.classList.add('open');
    });

    document.getElementById('closeCartBtn').addEventListener('click', closeAllModals);

    function executeCheckout() {
      haptic(20);
      showToast("Routing to Encrypted White-Glove Gateway...");
      setTimeout(closeAllModals, 1000);
    }

    // User Auth Drawer
    document.getElementById('userBtn').addEventListener('click', () => {
      haptic(15);
      closeAllModals();
      globalBackdrop.classList.add('active');
      userAuthSheet.classList.add('open');
    });

    document.getElementById('closeUserBtn').addEventListener('click', closeAllModals);

    function requestOtp() {
      const phone = document.getElementById('phoneInput').value.trim();
      if (phone.length < 10) {
        showToast("Please enter a valid 10-digit number");
        return;
      }
      haptic(15);
      document.getElementById('userPhoneDisplay').textContent = `+91 ${phone}`;
      document.getElementById('authStepPhone').style.display = 'none';
      document.getElementById('authStepOtp').style.display = 'flex';
    }

    function backToPhone() {
      document.getElementById('authStepOtp').style.display = 'none';
      document.getElementById('authStepPhone').style.display = 'flex';
    }

    function focusNext(input) {
      if (input.value.length === 1 && input.nextElementSibling) {
        input.nextElementSibling.focus();
      }
    }

    function verifyOtp() {
      haptic(25);
      showToast("Namasté! Welcome to Atelier Vault ✓");
      setTimeout(closeAllModals, 1200);
    }

    updateDots();
    syncProductInfoData();