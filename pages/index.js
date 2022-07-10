import ShareModal from 'lit-share-modal-v3';

export default function Home() {
  return (
    <div className={'App'}>
      <button onClick={() => setShowShareModal(true)}>Show Share Modal</button>

      {showShareModal && (
        <div className={'lit-share-modal'}>
          <ShareModal
            onClose={() => {
              setShowShareModal(false);
            }}
            onUnifiedAccessControlConditionsSelected={
              onUnifiedAccessControlConditionsSelected
            }
          />
        </div>
      )}
    </div>
  )
}
