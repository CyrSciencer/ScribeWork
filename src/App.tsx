import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { WordCreation } from "./pages/WordCreation";
import { Cosmology } from "./pages/Cosmology";
import { setCookie, getCookie, areCookiesAvailable } from "./utils/cookies";
// Define the root word type
interface RootWord {
  rootWord: string;
  wordMeaning: string;
}

// Define the context type
interface RootWordsContextType {
  rootWords: RootWord[];
  addRootWord: (rootWord: string, wordMeaning: string) => void;
  updateRootWord: (
    index: number,
    rootWord: string,
    wordMeaning: string
  ) => void;
  removeRootWord: (index: number) => void;
}

// Define the full word type
interface FullWord {
  fullWord: string;
  meaning?: string;
}

// Define the full word context type
interface FullWordContextType {
  fullWords: FullWord[];
  addFullWord: (fullWord: string, meaning?: string) => void;
  updateFullWord: (index: number, fullWord: string, meaning?: string) => void;
  removeFullWord: (index: number) => void;
  setCurrentFullWord: (fullWord: string) => void;
  currentFullWord: string;
}

// Define the notification type
interface Notification {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

// Define the notification context type
interface NotificationContextType {
  showNotification: (
    message: string,
    type?: "success" | "error" | "info"
  ) => void;
}

// Create the contexts
const RootWordsContext = createContext<RootWordsContextType | undefined>(
  undefined
);

const FullWordContext = createContext<FullWordContextType | undefined>(
  undefined
);

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

// Custom hooks to use the contexts
export const useRootWords = () => {
  const context = useContext(RootWordsContext);
  if (context === undefined) {
    throw new Error("useRootWords must be used within a RootWordsProvider");
  }
  return context;
};

export const useFullWord = () => {
  const context = useContext(FullWordContext);
  if (context === undefined) {
    throw new Error("useFullWord must be used within a FullWordProvider");
  }
  return context;
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

// Provider components
const RootWordsProvider = ({ children }: { children: ReactNode }) => {
  const [rootWords, setRootWords] = useState<RootWord[]>([]);

  // Load root words from cookies on component mount
  useEffect(() => {
    if (areCookiesAvailable()) {
      const savedRootWords = getCookie("rootWords");
      if (savedRootWords) {
        try {
          const parsedWords = JSON.parse(savedRootWords);
          setRootWords(parsedWords);
        } catch (error) {
          console.error("Error parsing saved root words:", error);
        }
      }
    }
  }, []);

  // Save root words to cookies whenever they change
  useEffect(() => {
    if (areCookiesAvailable() && rootWords.length > 0) {
      setCookie("rootWords", JSON.stringify(rootWords), {
        maxAge: 365 * 24 * 60 * 60, // 1 year
        path: "/",
      });
    }
  }, [rootWords]);

  const addRootWord = (rootWord: string, wordMeaning: string) => {
    setRootWords((prev) => [...prev, { rootWord, wordMeaning }]);
  };

  const updateRootWord = (
    index: number,
    rootWord: string,
    wordMeaning: string
  ) => {
    setRootWords((prev) =>
      prev.map((item, i) => (i === index ? { rootWord, wordMeaning } : item))
    );
  };

  const removeRootWord = (index: number) => {
    setRootWords((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <RootWordsContext.Provider
      value={{ rootWords, addRootWord, updateRootWord, removeRootWord }}
    >
      {children}
    </RootWordsContext.Provider>
  );
};

const FullWordProvider = ({ children }: { children: ReactNode }) => {
  const [fullWords, setFullWords] = useState<FullWord[]>([]);
  const [currentFullWord, setCurrentFullWord] = useState<string>("");

  // Load full words from cookies on component mount
  useEffect(() => {
    if (areCookiesAvailable()) {
      const savedFullWords = getCookie("fullWords");
      if (savedFullWords) {
        try {
          const parsedWords = JSON.parse(savedFullWords);
          setFullWords(parsedWords);
        } catch (error) {
          console.error("Error parsing saved full words:", error);
        }
      }
    }
  }, []);

  // Save full words to cookies whenever they change
  useEffect(() => {
    if (areCookiesAvailable() && fullWords.length > 0) {
      setCookie("fullWords", JSON.stringify(fullWords), {
        maxAge: 365 * 24 * 60 * 60, // 1 year
        path: "/",
      });
    }
  }, [fullWords]);

  const addFullWord = (fullWord: string, meaning?: string) => {
    setFullWords((prev) => [...prev, { fullWord, meaning }]);
  };

  const updateFullWord = (
    index: number,
    fullWord: string,
    meaning?: string
  ) => {
    setFullWords((prev) =>
      prev.map((item, i) => (i === index ? { fullWord, meaning } : item))
    );
  };

  const removeFullWord = (index: number) => {
    setFullWords((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <FullWordContext.Provider
      value={{
        fullWords,
        addFullWord,
        updateFullWord,
        removeFullWord,
        setCurrentFullWord,
        currentFullWord,
      }}
    >
      {children}
    </FullWordContext.Provider>
  );
};

// Notification component
const NotificationPopup = ({
  notification,
  onClose,
}: {
  notification: Notification;
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  // Function to format the message with cadef font for words
  const formatMessage = (message: string) => {
    // Extract words in quotes and wrap them with scribe-font class
    return message.replace(
      /"([^"]+)"/g,
      '<span class="scribe-font" style="font-size: 0.3em;">$1</span>'
    );
  };

  return (
    <div className={`notification notification-${notification.type}`}>
      <span
        dangerouslySetInnerHTML={{
          __html: formatMessage(notification.message),
        }}
      />
      <button className="notification-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = (
    message: string,
    type: "success" | "error" | "info" = "success"
  ) => {
    const id = Date.now().toString();
    const notification: Notification = { id, message, type };

    setNotifications((prev) => [...prev, notification]);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="notification-container">
        {notifications.map((notification) => (
          <NotificationPopup
            key={notification.id}
            notification={notification}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

function App() {
  return (
    <Router>
      <RootWordsProvider>
        <FullWordProvider>
          <NotificationProvider>
            <div className="App">
              <Header />
              <main>
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate to="/cosmology" replace />}
                  />
                  <Route path="/wordCreation" element={<WordCreation />} />
                  <Route path="/cosmology" element={<Cosmology />} />
                </Routes>
              </main>
            </div>
          </NotificationProvider>
        </FullWordProvider>
      </RootWordsProvider>
    </Router>
  );
}

export default App;
