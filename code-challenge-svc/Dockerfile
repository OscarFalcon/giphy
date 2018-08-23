FROM jboss/wildfly


RUN /opt/jboss/wildfly/bin/add-user.sh admin Admin#70365 --silent
COPY configuration/welcome-content/ /opt/jboss/wildfly/welcome-content/

ADD code-challengeAPI/build/libs/code-challenge-giphy.war /opt/jboss/wildfly/standalone/deployments/

RUN mkdir -p /opt/jboss/wildfly/modules/com/mysql/main
COPY configuration/module/ /opt/jboss/wildfly/modules/com/mysql/main/

COPY configuration/standalone.xml /opt/jboss/wildfly/standalone/configuration/

CMD ["/opt/jboss/wildfly/bin/standalone.sh", "-b", "0.0.0.0", "-bmanagement", "0.0.0.0"]
