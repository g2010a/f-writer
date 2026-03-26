import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "./components/theme-toggle";
import "./i18n";

function App() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [storyTitle, setStoryTitle] = useState("");
  const [storyDescription, setStoryDescription] = useState("");

  const handleCreateStory = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating story:", storyTitle, storyDescription);
    setOpen(false);
    setStoryTitle("");
    setStoryDescription("");
  };

  const handleCancel = () => {
    setOpen(false);
    setStoryTitle("");
    setStoryDescription("");
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-background" data-testid="welcome-page">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-foreground">{t('welcome.title')}</h1>
      <p className="text-lg text-muted-foreground mb-8">{t('welcome.subtitle')}</p>
      
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            data-testid="new-story-button"
          >
            {t('buttons.newStory')}
          </button>
        </Dialog.Trigger>
        
        <Dialog.Portal>
          <Dialog.Overlay 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            data-testid="new-story-modal-overlay"
          />
          <Dialog.Content 
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-background rounded-xl shadow-2xl p-6 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
            data-testid="new-story-modal"
          >
            <Dialog.Title className="text-2xl font-semibold mb-6 text-foreground">
              {t('welcome.title')}
            </Dialog.Title>
            
            <form onSubmit={handleCreateStory} className="space-y-4">
              <div className="space-y-2">
                <label 
                  htmlFor="story-title" 
                  className="block text-sm font-medium text-muted-foreground"
                  data-testid="story-title-label"
                >
                  {t('forms.storyTitle')}
                </label>
                <input
                  id="story-title"
                  type="text"
                  value={storyTitle}
                  onChange={(e) => setStoryTitle(e.target.value)}
                  placeholder={t('forms.storyTitlePlaceholder')}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  data-testid="story-title-input"
                  required
                />
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="story-description" 
                  className="block text-sm font-medium text-muted-foreground"
                  data-testid="brief-description-label"
                >
                  {t('forms.briefDescription')}
                </label>
                <textarea
                  id="story-description"
                  value={storyDescription}
                  onChange={(e) => setStoryDescription(e.target.value)}
                  placeholder={t('forms.briefDescriptionPlaceholder')}
                  rows={3}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                  data-testid="brief-description-input"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="submit" 
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  data-testid="create-story-button"
                >
                  {t('buttons.createStory')}
                  </button>
                <button 
                  type="button" 
                  onClick={handleCancel}
                  className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                  data-testid="cancel-button"
                >
                  {t('buttons.cancel')}
                </button>
              </div>
            </form>

            <Dialog.Close asChild>
              <button 
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent transition-colors text-muted-foreground"
                aria-label="Close"
                onClick={handleCancel}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}

export default App;
