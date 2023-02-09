import * as React from 'react';

const InitLoader = React.memo(function (props) {
    return (<div style={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 100 100" enableBackground="new 0 0 0 0" width={200} height={200}>
                <rect x="20" y="50" width="4" height="10" fill="#111c55">
                    <animateTransform attributeType="xml"
                                      attributeName="transform" type="translate"
                                      values="0 0; 0 20; 0 0"
                                      begin="0" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="30" y="50" width="4" height="10" fill="#111c55">
                    <animateTransform attributeType="xml"
                                      attributeName="transform" type="translate"
                                      values="0 0; 0 20; 0 0"
                                      begin="0.2s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="40" y="50" width="4" height="10" fill="#111c55">
                    <animateTransform attributeType="xml"
                                      attributeName="transform" type="translate"
                                      values="0 0; 0 20; 0 0"
                                      begin="0.4s" dur="0.6s" repeatCount="indefinite" />
                </rect>
            </svg>
        </div>
    </div>)
})
export default InitLoader