 // JavaScript: Block keyboard shortcuts and events
    document.addEventListener("DOMContentLoaded", function() {
        
        // 1. Prevent Right-Click Context Menu
        document.oncontextmenu = function(e) {
            e.preventDefault();
            return false;
        };

        // 2. Prevent Keyboard Shortcuts (Ctrl+C, Ctrl+V, etc.)
        document.addEventListener("keydown", function(e) {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v' || e.key === 'a')) {
                e.preventDefault();
                return false;
            }
        });

        // 3. Prevent Drag and Drop / Text Selection Start
        document.onselectstart = function() {
            return false;
        };

        document.ondragstart = function() {
            return false;
        };

        // 4. Apply to specific content container (Recommended)
        var contentContainer = document.querySelector('.no-copy'); 
        if(contentContainer) {
            contentContainer.onselectstart = function() { return false; };
            contentContainer.ondragstart = function() { return false; };
            
            // Prevent image dragging specifically inside the container
            contentContainer.querySelectorAll('img').forEach(img => {
                img.draggable = false;
            });
        }

        console.log("Content Protection Active");
    });
