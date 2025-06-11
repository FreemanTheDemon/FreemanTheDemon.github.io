import { useEffect, useState } from 'react';

export const useHomeAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const targetText = 'Benjamin Freeman Bird';
    const prefix = '>';
    let currentIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    let blinkInterval: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (currentIndex <= targetText.length) {
        const currentText = prefix + targetText.slice(0, currentIndex);
        setDisplayText(currentText);
        currentIndex++;

        if (currentIndex <= targetText.length) {
          typingTimeout = setTimeout(typeNextCharacter, 100);
        } else {
          // Typing is complete, start blinking
          setIsTyping(false);
          blinkInterval = setInterval(() => {
            setShowCursor(prev => !prev);
          }, 1200);
        }
      }
    };

    // Start typing after a brief delay
    const startDelay = setTimeout(() => {
      typeNextCharacter();
    }, 500);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(typingTimeout);
      clearInterval(blinkInterval);
    };
  }, []);

  // Show cursor during typing, or show/hide based on blink state when not typing
  const cursorVisible = isTyping || showCursor;
  return displayText + (cursorVisible ? '_' : '');
};

export const useAboutAnimation = () => {
  const [titleText, setTitleText] = useState('Benjamin Freeman Bird');

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count === 0) {
        setTitleText('Benjamin Freeman Bird +');
        count++;
      } else if (count === 1) {
        setTitleText('Benjamin Freeman Bird ++');
        count++;
      } else {
        setTitleText('Benjamin Freeman Bird');
        count = 0;
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return titleText;
};

export const useContactAnimation = () => {
  const [titleText, setTitleText] = useState('Benjamin Freeman Bird');

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count === 0) {
        setTitleText('Benjamin Freeman Bird >');
        count++;
      } else if (count === 1) {
        setTitleText('Benjamin Freeman Bird >>');
        count++;
      } else if (count === 2) {
        setTitleText('Benjamin Freeman Bird >>>');
        count++;
      } else {
        setTitleText('Benjamin Freeman Bird');
        count = 0;
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return titleText;
}; 