import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./i18n";  // Import i18n configuration
function App() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [storyTitle, setStoryTitle] = useState("");
  const [storyDescription, setStoryDescription] = useState("");
  const handleCreateStory = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating story:", storyTitle, storyDescription);
    setIsModalOpen(false);
    // TODO: Navigate to workspace
  };
  return (
    <main className="container" data-testid="welcome-page">
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.subtitle')}</p>
      <button 
        onClick={() => setIsModalOpen(true)}
        data-testid="new-story-button"
      >
        {t('buttons.newStory')}
      </button>
      {isModalOpen && (
        <div 
          role="dialog" 
          aria-modal="true"
          data-testid="new-story-modal"
          className="modal"
        >
          <h2>{t('welcome.title')}</h2>
          
          <form onSubmit={handleCreateStory}>
            <label data-testid="story-title-label">
              {t('forms.storyTitle')}
              <input
                type="text"
                value={storyTitle}
                onChange={(e) => setStoryTitle(e.target.value)}
                placeholder={t('forms.storyTitlePlaceholder')}
                aria-label={t('forms.storyTitle')}
                data-testid="story-title-input"
              />
            </label>
            <label data-testid="brief-description-label">
              {t('forms.briefDescription')}
              <textarea
                value={storyDescription}
                onChange={(e) => setStoryDescription(e.target.value)}
                placeholder={t('forms.briefDescriptionPlaceholder')}
                aria-label={t('forms.briefDescription')}
                data-testid="brief-description-input"
              />
            </label>
            <div className="modal-actions">
              <button 
                type="submit" 
                data-testid="create-story-button"
              >
                {t('buttons.createStory')}
              </button>
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                data-testid="cancel-button"
              >
                {t('buttons.cancel')}
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

export default App;