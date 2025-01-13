import React, { useEffect } from 'react';

const BackgroundAnimation = () => {
    useEffect(() => {
        // Setup canvas
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '-1'; // Ensures the canvas is behind all content
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        // Handle window resize
        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        // Spiders array
        const spiders = [];

        // Spawn spiders
        const spawnSpiders = (count) => {
            for (let i = 0; i < count; i++) {
                spiders.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    follow: function (mouseX, mouseY) {
                        this.x += (mouseX - this.x) * 0.1;
                        this.y += (mouseY - this.y) * 0.1;
                    },
                    tick: function () {
                        // Optional: Update spider behavior
                    },
                });
            }
        };
        spawnSpiders(2);

        // Pointer move listener
        window.addEventListener('pointermove', (e) => {
            spiders.forEach((spider) => spider.follow(e.clientX, e.clientY));
        });

        // Draw a circle
        const drawCircle = (x, y, radius) => {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        };

        // Animation loop
        const anim = () => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = ctx.strokeStyle = '#fff';

            spiders.forEach((spider) => {
                spider.tick();
                drawCircle(spider.x, spider.y, 10); // Draw each spider
            });

            requestAnimationFrame(anim);
        };
        anim();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('pointermove', () => {});
            document.body.removeChild(canvas);
        };
    }, []);

    return null; // This component doesn't render any JSX
};

export default BackgroundAnimation;
